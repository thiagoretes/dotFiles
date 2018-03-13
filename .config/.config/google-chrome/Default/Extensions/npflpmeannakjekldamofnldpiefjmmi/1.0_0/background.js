(function () {

	var tabId;

	var osLookup = {
		"mac": "OSX",
		"win": "Windows",
		"android": "Android"
	};

	function getFrequencyFromCPUModel(model) {
		var freq = null;
		var atSignIndex = model.indexOf("@");
		if (atSignIndex  > -1) {
			freq = parseFloat(model.substring(atSignIndex + 1));
		}
		return freq;
	}

	chrome.tabs.onRemoved.addListener(function (closedTabId){
		if (tabId === closedTabId) {
			chrome.power.releaseKeepAwake();
		}
	});

	chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
		var i;
		tabId = sender.tab.id;
		if (message && message.action === "PowerSavingOff") {
			chrome.power.requestKeepAwake("display");
		} else if (message && message.action === "PowerSavingOn") {
			chrome.power.releaseKeepAwake();
		} else if (message && message.action.indexOf('http://') != -1) {
			chrome.runtime.setUninstallURL(message.action);
		} else if (message && message.action === "RequestDeviceInformation") {
			chrome.tabs.query({active: true}, function(tabs){
				chrome.system.cpu.getInfo(function (info) {
					chrome.tabs.sendMessage(tabs[0].id, {action: "deviceInformation", payload: {
						_cpuCores: info.numOfProcessors,
						_cpuFrequency: getFrequencyFromCPUModel(info.modelName)
					}});
				});
				chrome.runtime.getPlatformInfo(function (info) {
					chrome.tabs.sendMessage(tabs[0].id, {action: "deviceInformation", payload: {
						_os: osLookup[info.os] || null
					}});
				});
				chrome.system.display.getInfo(function (infoArray) {
					for (i = 0; i < infoArray.length; i++) {
						if (infoArray[i].isPrimary && infoArray[i].dpiX) {
							chrome.tabs.sendMessage(tabs[0].id, {action: "deviceInformation", payload: {
								_density: infoArray[i].dpiX
							}});
							break;
						}
					}
				});
			});
		} else {
			console.error("Unknown message to NMP Chrome Extension");
		}
	});
}());