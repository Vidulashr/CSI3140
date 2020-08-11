//Getting element from document
var can = document.getElementById("can");

//Intialize the canvas element
var elem = can.getContext("2d");

//Setting parameters as asked in question
elem.shadowOffsetX = 2;
elem.shadowOffsetY = 5;
elem.shadowBlur = 6;
elem.shadowColor = "gray";

//Additional parameters, font and size
elem.font = "50px Arial";

//Finally, we draw the text
elem.fillText("HTML5 Canvas", 0, 50);