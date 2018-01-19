var game            = document.getElementById("game");
var currentColors   = [-1, -1, -1, -1];
var colors          = ["blue", "red", "yellow", "green", "white", "hotpink"];
var picked          = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
var bullet_row      = 0;
var square_column   = 0;
var square_column2  = 3;

function getRandomColor()
{
  var random = Math.floor(   Math.random() * colors.length   );
	return colors[random];
}

for (var rowCount = 0; rowCount < 12; rowCount++) {
  var row = document.createElement("div");
  row.setAttribute("id", "row_" + rowCount);
  for (var column = 0; column < 4; column++) {
    var bullet = document.createElement("div");
    bullet.setAttribute("id", "bullet_" + rowCount + "_" + column);
    bullet.setAttribute("class", "bullet");
    bullet.setAttribute("onclick", "setColor("+column+")");
    row.appendChild(bullet);
  }
  game.appendChild(row);
}

for (var secondRowCount = 0; secondRowCount < 12; secondRowCount++) {
  var secondRow = document.createElement("div");
  secondRow.setAttribute("id", "secondrow_" + secondRowCount);
  for (var secondColumn = 0; secondColumn < 4; secondColumn++) {
    var square = document.createElement("div");
    square.setAttribute("id", "square_" + secondRowCount + "_" + secondColumn);
    square.setAttribute("class", "square");
    secondRow.appendChild(square);
  }
  game.appendChild(secondRow);
}

function setColor(f_id)
{
  var bullet = document.getElementById("bullet_" + bullet_row + "_" + f_id);
  currentColors[f_id]++;
  if(currentColors[f_id] == colors.length) {
    currentColors[f_id] = 0;
  }
  var index = currentColors[f_id];
  bullet.style.backgroundColor = colors[index];
}
console.log(picked);

function check(){
    for (var bullet_column=0; bullet_column<4; bullet_column++){
        var bullet = document.getElementById("bullet_" + bullet_row + "_" + bullet_column);
        if ( bullet.style.backgroundColor === picked[bullet_column]) {
            var redSquare = document.getElementById("square_" + bullet_row + "_" + square_column);
            redSquare.style.backgroundColor = "red";
            square_column++;
        } else if (picked.includes(bullet.style.backgroundColor)){
      var whiteSquare = document.getElementById("square_" + bullet_row + "_" + square_column2);
			whiteSquare.style.backgroundColor = "white";
      square_column2--;
		}
	}
	var countForwin = 0;
	for (var i = 0; i < 4; i++) {
		if(document.getElementById("bullet_"+bullet_row+"_"+i).style.backgroundColor == picked[i]){
			countForwin++;
		}
	}
	if(countForwin == 4){
		alert("you win!!!!");
	}
  bullet_row++;
  square_column   = 0;
  square_column2  = 3;
  currentColors   = [-1, -1, -1, -1];
}
