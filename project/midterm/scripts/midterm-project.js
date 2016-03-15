// films questions and answers
var filmQuestions = ['Which actress has won the most Oscars?',
					'Name the director of the Lord of the Rings trilogy?',
					'Name the actress whose career began at the age of 3, and who went on to star in films such as Contact, Maverick and The Silence of the Lambs?',
					'The first movie ever given the title “Blockbuster” was which movie?'];

var filmCorrectAnswers = ['katherine hepburn',
				   		 'peter jackson',
				         'jodie foster',
				   		 'jaws'];


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

