var numSquares = 6;
var colors = generateColors(numSquares);

var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var tag = document.getElementsByClassName('square easyRem');

var pickedColor = pickColor();

var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");



function changeSquareColors(){
		for(var i = 0; i <squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click", function(){
				var selectedColor = this.style.backgroundColor;
				if(selectedColor === pickedColor){
					
					message.textContent = "Correct";
					changeColor(pickedColor);
					h1.style.backgroundColor = pickedColor;
					reset.textContent = "Play Again?"
				}
				else{
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again";
				}
			});
		}
}

changeSquareColors();

function changeColor(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	return colors[num]; 
}

function generateColors(number){
	var arr = [];

	for(var i = 0; i<number; i++){
		arr.push(randomColor(number));
	}

	return arr; 

}

function randomColor(){
	var rand_red = Math.floor(Math.random() * 256);
	var rand_green = Math.floor(Math.random() * 256);
	var rand_blue = Math.floor(Math.random() * 256);
	var randomColor = "rgb("+rand_red+", "+rand_green+", "+rand_blue+")";
	return randomColor;
}

reset.addEventListener("click", function(){
	resetGame(); 
});

function resetGame(){
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	selected.textContent = pickedColor;
	changeSquareColors();
	message.textContent = "";
	reset.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";

}

var selected = document.querySelector(".pickedColor");
selected.textContent = pickedColor;


easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	selected.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	selected.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});



