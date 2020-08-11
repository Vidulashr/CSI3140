//Get elements
var primevalues = document.getElementById("primevalues");

//Creating array with 1000 elements all set as 1
let array = new Array(1000).fill(1);
//Setting first two elements as 0, since not prime
array[0] = 0;
array[1] = 0;

//Looping through array starting from 2
for (let i = 2; i < Math.sqrt(1000); i++) {
    //For the values that are 1
    if (array[i] == 1) {
        //Loop through remainder of array
        for (let n = 2 * i; n < 1000; n += i) {
            //If a multiple, set as 0
            array[n] = 0;}
    }
}

//Prints proper index values by converting 1s and removes the 0s and joins them by a coma
primevalues.textContent = `The prime numbers are: ${array.map((i, x) => i > 0 ? x : i).filter(i => i != 0).join(" , ")}`;
