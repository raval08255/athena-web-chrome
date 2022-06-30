function loadScript(name) {
	const _script = document.createElement('script');
	_script.setAttribute('src', chrome.runtime.getURL(name));
	(document.head||document.documentElement).appendChild( _script  );
	_script.parentNode.removeChild( _script);
}

(function() {
	loadScript('network.js');
	loadScript('jsoneditor.min.js');
	loadScript('panel.js');
})();