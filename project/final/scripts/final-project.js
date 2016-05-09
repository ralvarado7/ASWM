window.addEventListener('load', function(){

	var s = Snap("#svg")

	//pull the image thumb
	var thumbs = ['clown_thumb.png','alien_thumb.png', 'ex_thumb.png', 'nina_thumb.png', 'conjuring_thumb.png'];
	var ThumbImg = s.image('scary_img/'+ thumbs[0],20,20,60,60);
	var ThumbIndex = 0;
	
	// mask group for rectangle and circle
	var maskrect = s.rect(0,0, 2000,2000);   
	maskrect.attr({
	    fill: "white"
	});
	var maskcircle = s.circle(455,455,40);
	spotlightmask = s.group(maskrect, maskcircle);

	// Add a black foreground rectangle to apply the mask to.
	var blackfg = s.rect(0,0, 2000,1000);
	
	var ThumbGhost = s.image('scary_img/ghost.png',20,20,60,60);


	//create a function that assigns random coordenates to the ghost circle
	function changeCoor (){
		var randomX = Math.floor(Math.random() * (1200 - 30 + 1)) + 30 + 'px';
		var randomY = Math.floor(Math.random() * (799 - 50 + 1)) + 50 + 'px';
		//Math.floor(Math.random() * (max - min + 1)) + min;
		
		ThumbIndex++;
		//change coordinates of thumbs
		setTimeout(function(){
			ThumbImg.attr({
			x: randomX,
			y: randomY,
			href: 'scary_img/'+ thumbs[ThumbIndex]
			})
		},500)
		//change coordenates of ThumbGhost
		ThumbGhost.attr({
			x: randomX,
			y: randomY
		})
		if(ThumbIndex > 5){
			console.log('you won')
		}
	}
	
	ThumbGhost.click(changeCoor);
	
	var ShockIndex = 0;
	ThumbGhost.click(function(){
		// add the DOM for the shock image
		var ShockImg = document.createElement('img');
		var ImgContainer = document.getElementById('imgcontainer');
		ImgContainer.insertBefore(ShockImg, ImgContainer.firstChild);
		
		//array of shock images
		var ShockArray = ['clown_shock.png','alien_shock.png','ex_shock.jpg','nina_shock.jpg','conjuring_shock.jpg'];
		
		//add the shock attr
		function addShock(){
				
			ShockImg.setAttribute('src','scary_img/' + ShockArray[ShockIndex]);
			ShockImg.setAttribute('id','shockimg');
			ShockIndex++;
		}
		setTimeout(addShock,1500);
		
		//remove the shock 
		function removeShock(){
			ImgContainer.removeChild(ShockImg);
		}
		setTimeout(removeShock,2000)	
	});
		
	
	//function to create and delete masks
	function createMask(){
		blackfg.attr({
		    mask: spotlightmask
		});	
	}
	function deleteMask(){
		blackfg.node.removeAttribute('mask');	
		//console.log('anything');
		// console.log(Thumb);
	}
	//creates the mask and the clickpoint
	window.addEventListener('click', function(e){
		createMask();
		
		//takes the position of click and gives it to circle
		var xPosition = e.clientX;
	    var yPosition = e.clientY - 50;

	    maskcircle.node.setAttribute('cx', xPosition);
	    maskcircle.node.setAttribute('cy', yPosition);

	    setTimeout(deleteMask,500);
	});

})




