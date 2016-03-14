var assignment_title = 'Add Me';

//----------------------------------------------------------------------
function landScapePic(width){
	var height = (width/3) * 2;
	console.log('Your height should be ' + height);
}
//----------------------------------------------------------------------

var calcAverage = function () {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		 sum += arguments[i];
	};
	var average = sum / arguments.length;
	return average;
};
//----------------------------------------------------------------------

function assignNumberToName(number, splitName){
	console.log('number ' + number + '  ' + splitName)
}
function splitName(nameAndLastNam){
	var nameAndLastNam = '';a
	var split = nameAndLastName.split('');
	return split;
}


//----------------------------------------------------------------------
window.addEventListener('load', function addParagraph(elem){

	var para = document.createElement('p');
	var paraText = document.createTextNode('this is the text');
	para.appendChild(paraText);

	var container = document.getElementById('block');
	container.appendChild(para);


	return para;
	
});
/*function createDOMelemnt (element){
	var element = document.createElement('p');
	var elementText = document.createTextNode('this is text');
	element.appendChild(elementText);
}

window.addEventListener('load', loader);


function giveDOMelement (elem) {
	//if (elem instanceof Element) {
		var section = document.createElement('section');
		section.textContent = 'New section';

		elem.parentNode.insertBefore(section, elem);

		elem.parentNode.removeChild(elem);

		return section;


	//};
}
var loader = function () {
	var ul = document.querySelector('main ul');
	var new_elem
};

window.addEventListener('load', loader);*/