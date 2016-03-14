window.addEventListener('load', function addElements(elem){
	 
	 document.body.style.backgroundImage = "url('IMG_1925.jpg')";
	 document.body.style.backgroundSize = "cover"; 
	 
	 var title = document.createElement('h1');
	 var titleText = document.createTextNode('Rafael\'s Page');
	 title.appendChild(titleText);
	 var titleContainer = document.getElementById('main');
	 titleContainer.appendChild(title);

	 //here is the div that contains the unordered list of links
	 var firstBlock = document.createElement('div');
	 var blockContainer = document.getElementById('main');
	 blockContainer.appendChild(firstBlock);

     var ul = document.createElement('ul');
     firstBlock.appendChild(ul);

     var links = [];

     function appendNewLink(){
     	for (var i = 0; i < links.length; i++) {
     	  		var li = document.createElement('li');
     	  		var a = document.createElement('a');
     			a.setAttribute('href', links[i]);
     			a.innerHTML = links[i];
     			li.appendChild(a);

     			ul.appendChild(li);
     	}
     }

	 var form = document.createElement('form');
	 firstBlock.appendChild(form);

     var input = document.createElement('input');
     input.setAttribute('type', 'text')
     form.appendChild(input);

         function addLink(){
     	var newLink = input.value;
		links.push(newLink);
		appendNewLink();
     }

     var btn = document.createElement('button');
     btn.innerHTML = 'Input your own link';
     firstBlock.appendChild(btn);
	btn.addEventListener('click', addLink);

	 //Here is the divs for a displays of images


})

