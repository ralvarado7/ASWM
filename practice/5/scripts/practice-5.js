function Request (url, successCallBack, failCallback){
	var XHR;

	var defaultCallBack = function (evt){
		console.warn(evt.type + ' event fired; you have not provided a callback');
	};

	//set up the XHR object.
	XHR = new XMLHttpRequest();
	XHR.open('GET', url);
	XHR.overrideMimeType('text/xml');
	XHR.addEventListener('load', successCallBack || defaultCallBack);
	XHR.addEventListener('load', failCallBack || defaultCallBack);
	XHR.send();

}

Request('/index.html', function(evt){
	console.log(this.responseXML.que);
})

