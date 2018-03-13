window.parent.document.addEventListener("nmp-extension-message", function (e) {
	chrome.runtime.sendMessage(e.detail);
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponseParam) {
	if (message.action === "deviceInformation") {
	    var evt = document.createEvent("CustomEvent");
		evt.initCustomEvent("nmp.fetchDeviceInformation", true, true, message.payload || {});
		window.parent.document.dispatchEvent(evt);
	}
});