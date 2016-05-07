window.addEventListener('load', function(){

	var s = Snap("#svg")
	
	// mask group for rectangle and circle
	var maskrect = s.rect(0,0, 2000,2000);   
	maskrect.attr({
	    fill: "white"
	});
	var maskcircle = s.circle(455,455,30);
	spotlightmask = s.group(maskrect, maskcircle);

	// Add a black foreground rectangle to apply the mask to.
	var blackfg = s.rect(0,0, 2000,1000);

	//pull the image
	var thumbs = ['clown_thumb.png','alien_thumb.png', 'ex_thumb.png', 'nina_thumb.png', 'conjuring_thumb.png'];
	var ThumbIndex = 0;

	function generateImageThumb(){
		document.thumb.src = 'scary_img/'+ thumbs[0];
	}

	//create a simple circle bind to the png at the back
	var GhostCircle = s.circle(555,555,30);
	GhostCircle.attr({
		stroke: "white"
	})
		//create a function that assigns random coordenates to the ghost circle
		function randomXY (){
			var randomX = Math.floor(Math.random() * (600 - 30 + 1)) + 30;
			var randomY = Math.floor(Math.random() * (600 - 50 + 1)) + 50;
			//Math.floor(Math.random() * (max - min + 1)) + min;

			GhostCircle.node.setAttribute('cx', randomX);
			GhostCircle.node.setAttribute('cy', randomY);
			
		}
	GhostCircle.click(randomXY);
		
	
	//function to create and delete masks
	function createMask(){
		blackfg.attr({
		    mask: spotlightmask
		});	
	}
	function deleteMask(){
		blackfg.node.removeAttribute('mask');	
		//console.log('anything');
		// console.log(maskcircle);
	}
	//creates the mask and the clickpoint
	window.addEventListener('click', function(e){
		createMask();
		
		//takes the position of click and gives it to circle
		var xPosition = e.clientX;
	    var yPosition = e.clientY - 50;

	    maskcircle.node.setAttribute('cx', xPosition);
	    maskcircle.node.setAttribute('cy', yPosition);

	    generateImageThumb();

	    setTimeout(deleteMask,500);
	});

})




