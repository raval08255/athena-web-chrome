// Get menu list element
const menuList = document.getElementById("popup-menu-list");
const menuOptionsMap = {};



function setMenuOptionStatus(id, status) {
	const element = document.getElementById(id);

	if (status === true) {
		element.classList.add("menu-option-active");
	} else {
		element.classList.remove("menu-option-active");
	}
}


function onMenuOptionSelected(id) {
	if (!menuOptionsMap[id]) {
		menuOptionsMap[id] = true;
		
		setMenuOptionStatus(id, true);
	} else {
		menuOptionsMap[id] = false;

		setMenuOptionStatus(id, false);
	}
}


// When menu list is clicked, call this handler
menuList.addEventListener("click", async (e) => {
	onMenuOptionSelected(e.target.id);
  /*let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onOptionMenuClick,
  });*/
});
