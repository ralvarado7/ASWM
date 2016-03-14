var lives = 3;
	function livesCounter(){
			return lives -= 1;
		}

	function restart (){
		var restart = document.createElement('button');
				restart.innerHTML = 'Restart'
				document.querySelector('main').appendChild(restart);
			
			restart.addEventListener('click', function(){
					setInterval(location.reload(),5000);
				})
	}
// window.addEventListener('load', function (evt) {
// 	document.querySelector('ul.urls').addEventListener('clicl', function(evt){
// 		if(evt.target.nodeName == "LI"){
// 			loadProfileByUrl(evt.target.textContent + 'data/profile.js');
// 		}
// 	})
// })

