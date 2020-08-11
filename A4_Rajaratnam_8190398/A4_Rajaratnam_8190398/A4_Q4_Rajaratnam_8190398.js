//Get image
var goku = document.getElementById("goku");

//Initialize variables for the starting position of the image
var X = 0;
var Y = 0;
var offX = 0;
var offY = 0;

//Initialize if image is currently being dragged or not
var pressed = false;

//On mouse down event
goku.onmousedown = move => {
    //prevent the original event from occuring
    move.preventDefault();

    //Image is now grabbed by user
    pressed = true;

    //Get current positions
    X = parseInt(goku.style.left) || 0;
    Y = parseInt(goku.style.top) || 0;

    offX = move.clientX;
    offY = move.clientY;
};

//On mouse move event
document.onmousemove = move => {
    //If image has been pressed
    if (pressed) {
        //Update position of image
        //Update X position
        goku.style.left = X + move.clientX - offX + 'px';
        //Update Y position
        goku.style.top = Y + move.clientY - offY + 'px';
    }
};

//On mouse up event
document.onmouseup = () => {
    //Once move is complete, pressed is now false, till next on mouse down event
    pressed = false;
}