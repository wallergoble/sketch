/*var gridSize = prompt("How many rows and columns would you like in your grid?")
	
	if (isNaN(gridSize) == true) {
		prompt("I like 16, you should try 16.");
	}
var gridSize = gridSize * gridSize;
*/


$(document).ready(function () {
	for (var i = 0; i <= 256; i++) {
		var unit = $("<div class='unit'></div>");
		$("#container").append(unit);
		}
});
