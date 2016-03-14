
var fizzbuzz = function (size) {
	for (var i = 1; i < size; i++) {
		var output = '';
		
		if (i % 3 === 0) output += 'Fizz';
		
		if (i % 5 === 0) output += 'Buzz';

		console.log(i, output);
	
	};
}

var size = 7;
var line = '\n';

while(line.length < size){
	line = '#' + line;
	console.log(line);
}

var chessboard = function (size){
	var output = '';
	 for (var outer = 0; outer < size; outer++) {
      output += (outer % 2) ? ' ' : '';
      for (var inner = 0; inner < size; inner++) {
        output += (inner % 2) ? '#' : ' ';
      }
      output += "\n";
    }
    return output;
}