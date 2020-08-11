var startbutton = document.getElementById("start");
var h = document.getElementById("h");
var t = document.getElementById("t");
var message = document.getElementById("message");
var tickcontent = document.getElementById("tick");


startbutton.onclick=function () {
    //User cannot press again till race is done
    startbutton.disabled = true;

    var id = setInterval(startmessage, 1000);
    var messagetick = 0;

    //Start positions of animals
    let tposition = 1;
    let hposition = 1;

    //Timer tick
    var tick = 0;

    function startmessage() {
        let tpercentage = Math.floor(Math.random() * 10) + 1;
        let hpercentage = Math.floor(Math.random() * 10) + 1;

        //For testing purposes
        console.log("tortoise",tpercentage);
        console.log("hare",hpercentage);

        //Once message is done, starts incrementing
        if (messagetick>=3) {
            //Percentages Tortoise
            //1,2 = 20% Slip
            //3,4,5 = 30% Slow plod
            //6,7,8,9,10 = 50% Fast plod

            //Fast plod
            if (tpercentage > 5) { //if 6,7,8,9,10
                tposition += 3;
            }
            //Slow plod
            else if (tpercentage >= 3) { //if 3,4,5
                tposition += 1;
            }
            //Slip
            else { //if 1,2
                tposition -= 6;
            }

            //Percentages Hare
            //1,2 = 20% Sleep
            //3-4 = 20% Big hop
            //5 = 10%  Big slip
            //6,7,8 = 30% Small hop
            //9,10 = 20% Small slip

            //Small slip
            if (hpercentage >= 9) { //if 9,10
                hposition -= 2;
            }
            //Small hop
            else if (hpercentage >= 6) { //if 6,7,8
                hposition += 1;
            }
            //Big slip
            else if (hpercentage === 5) { //if 5
                hposition -= 12;
            }
            //Big hop
            else if (hpercentage >= 3) { //if 3,4
                hposition += 9;
            }
            //Sleep
            else { //if 1,2
            }

            //If position passes below 1, stay at 1
            if (tposition < 1) {
                tposition = 1;
            }
            if (hposition < 1) {
                hposition = 1;
            }
            //If positions passes above 70, keep at 70
            if (tposition >= 70) {
                tposition = 70;
            }
            if (hposition >= 70) {
                hposition = 70;
            }
        }

        //Initial message before the start of the race
        if (messagetick === 0) {
            h.style.display = "inline";
            t.style.display = "inline";
            message.textContent = "ON YOUR MARK";
            messagetick++;}
        else if (messagetick === 1) {
            message.textContent = "GET SET";
            messagetick++;}
        else if (messagetick === 2) {
            message.textContent = "BANG!!!\nAND THEY’RE OFF!!!";
            messagetick++;
        }

        //Race started
        else{
            tick++; //increment time
            tickcontent.innerText = tick;
            message.textContent = "\n\n";

            //Update position
            h.style.marginLeft = hposition+"pc";
            t.style.marginLeft = tposition+"pc";

            //Conditions
            if ((tposition==hposition)&&(tposition!=70)&&(tposition!=1)){
                message.textContent = "OUCH!!!";}
            if ((tposition>=70)&&(hposition<70)){
                message.textContent = "TORTOISE WINS!!! YAY!!!";
                clearInterval(id);}
            if ((hposition>=70)&&(tposition<70)){
                message.textContent = "HARE WINS. YUCK!";
                clearInterval(id);}
            if ((hposition>=70)&&(tposition>=70)){
                message.textContent = "IT'S A TIE.";
                clearInterval(id);}

        }
    }
}


