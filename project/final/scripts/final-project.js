window.addEventListener('load', function(){

	var s = Snap("#svg")

	//pull the image thumb
	var thumbs = ['clown_thumb.png','samara_thumb.png','alien_thumb.png','conjuring_thumb.png', 'ex_thumb.png', 'nina_thumb.png'];
	var ThumbImg = s.image('scary_img/'+ thumbs[0],20,20,60,60);
	var ThumbIndex = 0;
	
	// mask group for rectangle and circle
	var maskrect = s.rect(0,0, 1200,799);   
	maskrect.attr({
	    fill: "white"
	});
	var maskcircle = s.circle(455,455,55);
	spotlightmask = s.group(maskrect, maskcircle);

	// Add a black foreground rectangle to apply the mask to.
	var BlackScreen = s.rect(0,0, 1200,799);
	BlackScreen.attr({
		stroke: 'white'
	})
	
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
		
		var Thumbtop = document.createElement('img');
		document.getElementById('menu').appendChild(Thumbtop);

		Thumbtop.setAttribute('src', 'scary_img/'+thumbs[ThumbIndex-1]);
		Thumbtop.setAttribute('height', '30px');

		if(ThumbIndex > 5){
			setTimeout(function(){
				BlackScreen.remove();
				maskcircle.remove();
				maskrect.remove();

				var text = ['You have defeated the evil','in this room.'];
				var TextWin1 = s.text(200,200,text[0]);
				TextWin1.attr({'font-size':120, fill: 'white'})

				var TextWin2 = s.text(200,400,text[1]);
				TextWin2.attr({'font-size':120, fill: 'white'})
			},3000)
		
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
		var ShockArray = ['clown_shock.png','samara.jpg','alien_shock.png','conjuring_shock.jpg','ex_shock.jpg','nina_shock.jpg',];
		var audio = new Audio('sounds/Psycho_ Scream.mp3');
		//add the shock attr
		function addShock(){
				
			ShockImg.setAttribute('src','scary_img/' + ShockArray[ShockIndex]);
			ShockImg.setAttribute('id','shockimg');
			ImgContainer.removeChild(document.getElementById('img'));
			ShockIndex++;
			//audio
			audio.play();
		}
		setTimeout(addShock,1500);
		
		//remove the shock 
		function removeShock(){
			ImgContainer.removeChild(ShockImg);
			
			var RoomImg = document.createElement('img');
			ImgContainer.appendChild(RoomImg);

			RoomImg.setAttribute('src', 'scary_img/room.jpg');
			RoomImg.setAttribute('id', 'img');
			audio.pause();
		}
		setTimeout(removeShock,3000)	
	});
		
	
	//function to create and delete masks
	function createMask(){
		BlackScreen.attr({
		    mask: spotlightmask
		});	
	}
	function deleteMask(){
		BlackScreen.node.removeAttribute('mask');	
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




