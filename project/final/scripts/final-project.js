window.addEventListener('load', function(){

	
	var s = Snap("#svg")
	
	// mask group for rectangle and circle
	var maskrect = s.rect(0,0, 2000,2000);   
	maskrect.attr({
	    fill: "white"
	});
	
	var maskcircle = s.circle(455,455,30);
	

	//group rect and circle to mask
	spotlightmask = s.group(maskrect, maskcircle);

	// Add a black foreground rectangle to apply the mask to.
	var blackfg = s.rect(0,0, 2000,2000);
	
	
	function createMask(){
		blackfg.attr({
		    mask: spotlightmask
		});	
	}
	function deleteMask(){
		blackfg.node.removeAttribute('mask');	
		console.log(blackfg);
		console.log(maskcircle);
	}
	//creates the mask and the clickpoint
	window.addEventListener('click', function(e){
		createMask();
		
		var xPosition = e.clientX;
	    var yPosition = e.clientY;

	    maskcircle.node.setAttribute('cx', xPosition);
	    maskcircle.node.setAttribute('cy', yPosition);

	    setTimeout(deleteMask,500);
	});

})




