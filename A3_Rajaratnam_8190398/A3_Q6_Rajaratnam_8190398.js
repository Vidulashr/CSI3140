//function that converts normal word to pig latin
function printLatinWord(word){
    var split = word.split(""); //Split word into characters
    var firstletter = split[0]; //Save first character
    var res = split.slice(1); //Remove first character
    var joined = res.join(""); //Join array into a word without first letter
    joined += firstletter; //add first letter at the end
    joined += "ay"; //add "ay" at the end
    return joined; //return resulting word
}

//Get all elements
var text = document.getElementById("initial");
var conversion = document.getElementById("results");
var convertbutton = document.getElementById("convert");

//When user clicks to convert
convertbutton.onclick = function(){
    console.log(text.value);
    if (text.value!=="") {
        var words = text.value.split(" "); //split the words in the sentence
        var result = ""; //initialize conversion
        //For each word, pass to function
        for (i = 0; i < words.length; i++) {
            result += printLatinWord(words[i]);
            result += " "; //add converted word to results
        }
        //Display resulting conversion
        conversion.value = result;
    }
    //When user leaves text input blank
    else{
        alert("Please enter a phrase to convert.")
    }
}
