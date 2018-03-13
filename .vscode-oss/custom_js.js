//USER VARS
startMenuAsHidden = true;


//CODE
custom = {};
custom.menu = {};
custom.orig_Menu = remote.Menu.getApplicationMenu();
custom.menu.isHidden = false;



//Process Hotkey = Alt + P
custom.menuProcHotkey = function(e){
	var key = e.keyCode;
	if(e.altKey && key == 80){//Edit key here to change what combination you want
		if(!custom.menu.isHidden)
			remote.Menu.setApplicationMenu(null);
		else
			remote.Menu.setApplicationMenu(custom.orig_Menu);

		custom.menu.isHidden = !custom.menu.isHidden;
	}
	e.stopPropagation();
	e.preventDefault();
}

custom.statusBar = {};
custom.statusBar.applied = false;
custom.statusBar.applyChanges = function(){
	if(document.getElementsByClassName("statusbar").length === 1){
		document.getElementsByClassName("statusbar")[0].style.backgroundColor = "#222";//Make down bar Gray
		custom.statusBar.applied = true;
		if(startMenuAsHidden){
			remote.Menu.setApplicationMenu(null);
			custom.menu.isHidden = true;
		}

	}
	else
		setTimeout(custom.statusBar.applyChanges,100);
}
		
	

window.onload = function(e){ 
	window.addEventListener('keyup', custom.menuProcHotkey, false);
	console.log("Hide Menu Plugin: LOADED!");
	custom.statusBar.applyChanges();
	
}
