//Getting element from document
var can = document.getElementById("can");

//Intialize the canvas element
var elem = can.getContext('2d');

//Drawing a star
elem.beginPath();
elem.moveTo(100, 0);
elem.moveTo(140,50);
elem.lineTo(200, 60);
elem.lineTo(160, 120);
elem.lineTo(160, 190);
elem.lineTo(100, 160);
elem.lineTo(50, 190);
elem.lineTo(50, 120);
elem.lineTo(0, 70);
elem.lineTo(65, 50);
elem.lineTo(100, 0);
elem.closePath();

//Create gradient with 3 different colors vertical
let gradient = elem.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "blue");

//Add gradient to the element
elem.fillStyle = gradient;
//Fill the element
elem.fill();
