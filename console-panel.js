function loadScript(name, cb = undefined) {
	const _script = document.createElement('script');
	_script.setAttribute('src', chrome.runtime.getURL(name));
	(document.head||document.documentElement).appendChild( _script  );
	_script.parentNode.removeChild( _script);
	
	if (cb) {
		setTimeout(cb, 1000);
	}
}

(function() {
	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		const button = document.getElementById("toggle-console-panel-btn");

		if (request.action === 'DEACTIVATE_APP') {			
			if (button) {
				button.setAttribute("data", request.tabId); 
				button.setAttribute("data-status", request.action); 
				button.click(request.tabId);
			}
		}
		
		if (request.action === 'ACTIVATE_APP') {
			if (button) {
				button.setAttribute("data", request.tabId); 
				button.setAttribute("data-status", request.action); 
				button.click(request.tabId);
			}
		}

		return sendResponse('pong');
	});
	
	loadScript('network.js');
	loadScript('jsoneditor.min.js');

	loadScript('panel.js', () => {
		chrome.runtime.sendMessage({ id: 'GET_TAB_STATE' }, function(response) {
			const button = document.getElementById("toggle-console-panel-btn");
			const restoreButton = document.getElementById("restore-console-panel-btn");

			if (response.value === true) {
				if (button) {
					button.setAttribute("data-status", 'ACTIVATE_APP'); 
					restoreButton.setAttribute("data-status", 'ACTIVATE_APP'); 
					restoreButton.setAttribute("data-id", response.id);
					button.click();
					restoreButton.click();
					chrome.runtime.sendMessage({ id: 'SET_TAB_STATE', value: true });
				}
			} else {
				if (button) {
					button.setAttribute("data-status", 'DEACTIVATE_APP'); 
					button.click();
					chrome.runtime.sendMessage({ id: 'SET_TAB_STATE', value: false });
				}
			}
		});
	});
})();
