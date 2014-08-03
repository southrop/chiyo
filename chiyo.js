var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
    writeText(context, "DON'T SEXUALIZE CHIYO");
};
imageObj.src = 'http://puu.sh/aCUEX.jpg';

var radians = 180 / Math.PI;

context.font = "3em Oswald";
context.textAlign = "center";



document.getElementById('text').addEventListener('keyup', function (){
	writeText(context, this.value);
}, false);

function writeText(context, text) {
	context.clearRect(0, 0, canvas.width, canvas.height); // Clear's canvas
    context.drawImage(imageObj, 0, 0); // redraws Chiyo
    
    context.save();
    context.rotate(-4.5/radians); // rotates to match the sign board

    context.fillText(text, 242, 400);

    context.restore(); // undoes rotation
}

// TO DO: WORD WRAP