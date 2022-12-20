function loadScript(name) {
	const _script = document.createElement('script');
	_script.setAttribute('src', chrome.runtime.getURL(name));
	(document.head||document.documentElement).appendChild( _script  );
	_script.parentNode.removeChild( _script);
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
	loadScript('panel.js');
})();
