const ACTIVATE_MENU_ID = 'ACTIVATE';
const DEACTIVATE_MENU_ID = 'DEACTIVATE';

const INACTIVE = '#8B8B8B';
const ACTIVE = '#21AF0D';

let counter = 0;
let value = 0;

function setBadge(text, color) {
    chrome.action.setBadgeText({text});
    chrome.action.setBadgeBackgroundColor({color});
}

function showEnabled() {
    setBadge('On', ACTIVE);
}

function showDisabled() {
    setBadge('Off', INACTIVE);
}

function sendActivationMessage(tabId) {
    chrome.tabs.sendMessage(tabId, { action: 'ACTIVATE_APP', tabId });
    showEnabled();
}

function toggleActivationMessage(tabId, cb) {
    chrome.tabs.sendMessage(tabId, { action: 'TOGGLE_APP', tabId }, () => {
        cb();
    });
}

function sendDeactivationMessage(tabId) {
    chrome.tabs.sendMessage(tabId, { action: 'DEACTIVATE_APP', tabId });
    showDisabled();
}


function getTabState(tabId, cb) {
	chrome.storage.local.get(`${tabId}`, (val) => cb(val[tabId]));
}


function setTabState(tabId, value) {
	chrome.storage.local.set({[`${tabId}`]: value}, () => null);
}


function getRulerActivationStatus(tabId,cb, value = undefined) {
	if (!tabId) {
		return cb(false);
	}
	
	if (value !== undefined) {
		chrome.storage.local.set({[`${tabId}`]: value}, () => null);
		if (value === false) {
			sendDeactivationMessage(tabId);
		}
		
		if (value === true) {
			sendActivationMessage(tabId);
		}
		cb(value);
	}

	chrome.storage.local.get(`${tabId}`, (val) => {
		if (!val[tabId]) {
			chrome.storage.local.set({[`${tabId}`]: true}, () => null);
			sendActivationMessage(tabId);
			cb(true);
		} else {
			chrome.storage.local.set({[`${tabId}`]: false}, () => null);
			sendDeactivationMessage(tabId);
			cb(false);
		}
	});
}

function handleTabChange(tabId, value = undefined) {
    getRulerActivationStatus(tabId, (result) => {
        if(!result) {
            showDisabled();
        } else {
            showEnabled();
        }
	}, value);
}

(function () {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
		if (request.id === 'TAB_ID') {
			chrome.tabs.query({ active: true, currentWindow: true }, function (
				tabs,
			) {
				sendResponse(tabs[0].id);
			});
		}
		
		if (request.id === 'GET_TAB_STATE') {
			chrome.tabs.query({ active: true, currentWindow: true }, function (
				tabs,
			) {
				getTabState(tabs[0].id, (val) => {
					sendResponse({ value: val, id: tabs[0].id });
				});
			});
		}
		
		if (request.id === 'SET_TAB_STATE') {
			chrome.tabs.query({ active: true, currentWindow: true }, function (
				tabs,
			) {
				setTabState(tabs[0].id, request.value);
				sendResponse({ value: request.value, id: tabs[0].id });
			});
			
			if (request.value === true) {
				showEnabled();
			} else {
				showDisabled();
			}
		}

		return true;
	});
	 
    chrome.action.onClicked.addListener((tab) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (
            tabs,
        ) {
            handleTabChange(tabs[0].id)
        });
    });
	
	chrome.tabs.onRemoved.addListener(function(tabid, removed) {
		console.log("Removing entry for: ", tabid);
		chrome.storage.local.remove(`${tabid}`, () => null);
	});
})();
