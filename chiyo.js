var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
    writeText(context, 'DON\'T SEXUALIZE CHIYO');
};
imageObj.src = 'http://puu.sh/aCUEX.jpg';

var angle = -4/(180 / Math.PI);

context.font = '3em Oswald';
context.textAlign = 'center';

document.getElementById('sexualize').addEventListener('keyup', function (){
	writeText(context, this.value);
}, false);


function writeText(context, text) {
	context.clearRect(0, 0, canvas.width, canvas.height); // Clear's canvas
    context.drawImage(imageObj, 0, 0); // redraws Chiyo
    
    context.save();
    context.rotate(angle); // rotates to match the sign board

    //context.fillText(text, 247, 391);
    wordWrap(context, text, 247, 391);

    context.restore(); // undoes rotation
}

function wordWrap(context, text, x, y) {
	context.font = '3em Oswald';
	context.textAlign = 'center';

	var lineHeight = 71;
	var maxWidth = 270;

	var words = text.split("\n");
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].split(" ");
	};
	console.log(words);

	for (var i = 0; i < words.length; i++) {
		var line = "";
		for (var j = 0; j < words[i].length; j++) {
			if(line == "") {
				var testLine = line + words[i][j];
			} else {
				var testLine = line + " " + words[i][j];
			}

			if (context.measureText(testLine).width > maxWidth) {
				if (y < 550) {
					context.fillText(line, x, y);
					line = words[i][j];
					y += lineHeight;
				}
			} else {
				line = testLine;
			}
		};
		if (y < 550) {
			context.fillText(line, x, y);
			y += lineHeight;
		}
	};
}