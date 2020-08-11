//Creating all objects that will be used during the puzzle game
var pressed = null; //The object that will be pressed by the user
var secondpress = null; //The object that will switched with press
var shuffle = []; //shuffled list that will be prepared to populate the grid
let tiles = document.getElementsByTagName('td'); //Gets all grid spaces in the game

//Function to get a random number between the given max and min
function getRandomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;}

//Function that checks whether number is already present in a given list
function Present(num,input){
    var result = false;
    for (i = 0; i < input.length; i++) {
        if (input[i] == num){ //if current iteration is equal to number
            return true;}} //return true
    return result;} //else it will return false

//Function that checks whether two selected points are adjacent or not
function Adjacent(one,two){
    var value1 = one.innerText; //get inner text values of tile 1 and 2
    var value2 = two.innerText;
    if (value1 == ""){ //if the tile 1 was empty, its 16 in the list
        value1 = 16;
        value2 = parseInt(value2);} //get the integer values of tile 2
    if (value2 == ""){ //if the tile 2 was empty, its 16 in the list
        value2 = 16;
        value1 = parseInt(value1);} //get integer value of tile 1
    //Get indexes of both points on the grid
    var indone = shuffle.indexOf(value1);
    var indtwo = shuffle.indexOf(value2);

    //If first selected is in the first row
    if (indone<4){
        //if first in the row
        if (indone%4==0){
            if ((indtwo != (indone+4))&&(indtwo!=(indone+1))){ //if not legal move
                return false;
            }
            return true; //if legal
        }
        //If last in the row
        else if (indone%3==0){
            if ((indtwo != (indone+4))&&(indtwo!=(indone-1))){//if not legal move
                return false;
            }
            return true; //if legal
        }
        if ((indtwo != (indone+4))&&(indtwo!=(indone-1))&&(indtwo!=(indone+1))){//if not legal move
            return false;
        }
        return true;//if legal
    }
    //If first selected is in the last row
    else if (indone>11){
        //if first in the row
        if (indone%4==0){
            if ((indtwo != (indone-4))&&(indtwo!=(indone+1))){//if not legal move
                return false;
            }
            return true;//if legal
        }
        //If last in the row
        else if (indone%5==0){
            if ((indtwo != (indone-4))&&(indtwo!=(indone-1))){//if not legal move
                return false;
            }
            return true;//if legal
        }
        if ((indtwo != (indone-4))&&(indtwo!=(indone-1))&&(indtwo!=(indone+1))){//if not legal move
            return false;
        }
        return true;//if legal

    }
    //Any row in between
    else{
        //if first in the row
        if (indone%4==0){
            if ((indtwo != (indone+4))&&(indtwo!=(indone+1))&&(indtwo != (indone-4))){//if not legal move
                return false;
            }
            return true;//if legal
        }
        //If last in the row
        else if (indone%4==3){
            if ((indtwo != (indone+4))&&(indtwo!=(indone-1))&&(indtwo != (indone-4))){//if not legal move
                return false;
            }
            return true;//if legal
        }
        if ((indtwo != (indone+4))&&(indtwo!=(indone-1))&&(indtwo!=(indone+1))&&(indtwo!=(indone-4))){//if not legal move
            return false;
        }
        return true;//if legal
    }
}

//Function that swaps two elements in a given list
function swap(one,two,list){
    var value1 = one.innerText; //get inner values of tiles
    var value2 = two.innerText;
    if (value1 == ""){ //if empty its 16 in the list
        value1 = 16;
        value2 = parseInt(value2);} //get integer values
    if (value2 == ""){ //if empty its 16 in the list
        value2 = 16;
        value1 = parseInt(value1);} //get integer values
    //Get indexes of both points on the grid
    var indone = shuffle.indexOf(value1);
    var indtwo = shuffle.indexOf(value2);
    //save element values
    var saved1 = list[indone];
    var saved2 = list[indtwo];
    //swap elements in the list
    list[indone]= saved2;
    list[indtwo]= saved1;

}

//Function that populates the grid using a given list
//Spot with number 16 will be left empty
function populate(list) {
    for (i = 0; i < tiles.length; i++) {
        var numbertofill = list[i];
        if (numbertofill == 16) {
            numbertofill = " "; //if 16 leave it empty in grid
        }
        tiles[i].innerText = numbertofill; //fill grid with value
    }
}


//MAIN PROGRAM
//Create the shuffle list to populate the grid
for (i = 0; i < tiles.length; i++) {
    var numbertoadd = getRandomBetween(1,17);
    while (Present(numbertoadd,shuffle)){
        numbertoadd = getRandomBetween(1,17);
    }
    shuffle[i] = numbertoadd;
}

//Initial population of grid using shuffled numbers
populate(shuffle);

//DOM and click event for each tile that checks whether user has pressed a tile and alerts them of illegal presses
[].forEach.call(tiles, tile => tile.onclick = event => {
    //If first selection
    if (pressed == null) {
        pressed = event.target; //Pressed is now the grid spot that was selected
        pressed.classList.add('pressed'); //adds to class so we show it is pressed with change of color
    }
    //If second selection
    else if ((secondpress == null) && (pressed != null) ){
        secondpress = event.target; //gets the second grid point selected by user
        secondpress.classList.add('pressed'); //adds to class so we show it is pressed with change of color

        //If first selected was the empty grid square
        if (pressed.innerText == ""){
            //If both selected are empty, alert and reset
            if (secondpress.innerText == ""){
                //Resets everything
                pressed.classList.remove('pressed');
                secondpress.classList.remove('pressed');
                pressed = null;
                secondpress = null;
            }
            else {
                //If tiles are not adjacent. alert and reset
                if (Adjacent(pressed, secondpress)==false){
                    alert("ALERT: Tile not Adjacent")
                    //Resets everything
                    pressed.classList.remove('pressed');
                    secondpress.classList.remove('pressed');
                    pressed = null;
                    secondpress = null;
                }
                else{ //If move is legal, swap
                    //Swap grid tiles
                    swap(pressed,secondpress,shuffle);
                    populate(shuffle);
                    //Resets everything
                    pressed.classList.remove('pressed');
                    secondpress.classList.remove('pressed');
                    pressed = null;
                    secondpress = null;
                }
            }
        }
        //If first selected was NOT empty
        else{
            //If pressed same one, unclick
            if (secondpress.innerText == pressed.innerText){
                pressed.classList.remove('pressed');
                secondpress.classList.remove('pressed');
                pressed = null;
                secondpress = null;
            }
            //If both selected are NOT empty. alert and reset
            if (secondpress.innerText != ""){
                alert("ALERT: Atleast one must be empty")
                //Resets everything
                pressed.classList.remove('pressed');
                secondpress.classList.remove('pressed');
                pressed = null;
                secondpress = null;
            }
            else {
                //If tiles are not adjacent. alert and reset
                if (Adjacent(pressed, secondpress)==false){
                    alert("ALERT: Tile not Adjacent")
                    //Resets everything
                    pressed.classList.remove('pressed');
                    secondpress.classList.remove('pressed');
                    pressed = null;
                    secondpress = null;
                }
                else{//If legal move, swap
                    //Swap grid tiles
                    swap(pressed,secondpress,shuffle);
                    populate(shuffle);
                    //Resets everything
                    pressed.classList.remove('pressed');
                    secondpress.classList.remove('pressed');
                    pressed = null;
                    secondpress = null;
                }
            }


        }

    }
});