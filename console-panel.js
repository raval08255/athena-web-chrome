function loadScript() {
	console.log("loading");
	const _script = document.createElement('script');
	_script.setAttribute('src', chrome.runtime.getURL('panel.js'));
	(document.head||document.documentElement).appendChild( _script  );
	_script.parentNode.removeChild( _script);
}

(function() {
	loadScript();
})();