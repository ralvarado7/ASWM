window.addEventListener('load', function(){

	
	var s = Snap("#svg");

	
	var greenbg = s.rect(0,0, 400,300);
	greenbg.attr({
	    fill: "white"
	});
	//mask group for rectangle and circle
	var maskrect = s.rect(0,0, 400,300);   
	maskrect.attr({
	    fill: "white"
	});
	var cirMaskX = 140;
	var cirMaskY = 130;
	var maskcircle = s.circle(cirMaskX,cirMaskY, 80);  
	
	spotlightmask = s.group(maskrect, maskcircle);

	// Add a black foreground rectangle to apply the mask to.
	var blackfg = s.rect(0,0, 400,300);
	// Attch the mask to the black foreground rect.
	blackfg.attr({
	    mask: spotlightmask
	});


	
})




