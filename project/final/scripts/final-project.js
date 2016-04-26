window.addEventListener('load', function(){

	var s = Snap('svg');
	var pointer = s.circle(200,200,100);
	pointer.attr({
		fill: "#000000",
		
	});

	var black = s.rect(0,100,2000,2000);
	black.attr({
		fill:'#2f4f4f',
		mask: pointer
	});

	
})




