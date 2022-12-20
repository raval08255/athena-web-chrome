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
    chrome.action.onClicked.addListener((tab) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (
            tabs,
        ) {
            handleTabChange(tabs[0].id)
        });
    });

    chrome.tabs.onActivated.addListener(({id}) => {
        handleTabChange(id)
      });

      chrome.tabs.onUpdated.addListener(({id}) => {
        handleTabChange(id, false);
      });
})();
