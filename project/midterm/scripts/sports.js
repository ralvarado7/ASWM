// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
window.addEventListener('load', function (){
	var questions = ['What colour jersey is worn by the winners of each stage of the Tour De France?',
					 'Which chess piece can only move diagonally?',
					 'In 2011, which country hosted a Formula 1 race for the first time?',
					 'Which nation took home the Soccer World Cup in 2014? '];

	var correctAnswers = ['yellow',
				   		 'bishop',
				         'india',
				   		 'brazil'];
	
	document.querySelector('#start').addEventListener('click', function filmTrivia(){
		
		// var threeMinutes = 60 * 1,
  //       display = document.querySelector('#time');
  //   	startTimer(threeMinutes, display);
		
		//remove ready to start and start button
		// document.querySelector('main').removeChild(document.querySelector('h2'));
		// document.querySelector('main').removeChild(document.querySelector('#start'));
		var div = document.createElement('div');
		document.querySelector('main').appendChild(div);

		var question = document.createElement('p');
		var questionCont = document.createTextNode(questions[0]);
		question.appendChild(questionCont);
		div.appendChild(question);

		var userAnswer = document.createElement('input');
		userAnswer.innerHTML = 'Your answer here'
		userAnswer.setAttribute('type', 'text');
		div.appendChild(userAnswer);

		var submitBtn = document.createElement('button');
		submitBtn.innerHTML = 'Submit';
		submitBtn.setAttribute('id', 'submit-button')
		div.appendChild(submitBtn);

		if (display.textContent == "00:50") {
			restart();
		};
		if (questions.length == 0) {
			document.querySelector('main').removeChild(div);

			var win = document.createElement('p');
			win.innerHTML = 'YOU WIN';
			document.querySelector('main').appendChild(win);
			
			restart();
		};

		document.querySelector('#submit-button').addEventListener('click', function(){
			if (userAnswer.value == correctAnswers[0]) {
				document.querySelector('main').removeChild(div);
				
				questions.splice(0,1);
				correctAnswers.splice(0,1);
				filmTrivia();

			} else if (userAnswer.value != correctAnswers[0]) {
				document.querySelector('#lives-counter').innerHTML = livesCounter();

				var wrong = document.createElement('p')	
				var wrongMsg = document.createTextNode('You\'re Wrong !Try again');
				wrong.appendChild(wrongMsg);
				div.appendChild(wrong);
			};
			
			if (lives == 0){
				document.querySelector('main').removeChild(div);
				
				var lose = document.createElement('p');
				lose.innerHTML = 'Sorry Try Again';
				document.querySelector('main').appendChild(lose);

				restart();
			};
			
		})
	})	
})