/*
DATA FLOWWWW

keyUp listener = done
increment keypress variable = kinda done, need to look at node keyboard interface

start new typing object thingy
calculate cpm based on typing thing
translate cpm to wpm (/5 lol)
render wpm 
*/


// eventTarget.addEventListener("keydown", event => {
//   if (event.isComposing || event.keyCode === 229) {
//     return;
//   }
//   // do something
//var x = event.charCode;
//document.getElementById("demo").innerHTML = "The Unicode value is: " + x;

//        setTimeout(() => {
            
// }, breaktaken = false);
// });


//jelp

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function timeReset() {
    console.log("we got thorugh event listener bro...")
}

(function a(event) {

    let keypress = 0;
    let breakTime = 0
    let breaktaken = false;
    //console.time(typed);
    let startTime = Date.now()
    document.body.addEventListener("keydown", function(e) {

        //if (breaktaken) {keypress = 0}
        breakTime = 10000;
        setTimeout(function (){
            console.log("setTimeout reset, hope you're done typing", breakTime);
            //console.timeEnd(typed)
            breaktaken = true;
    
        }, breakTime)

        keypress++;
        let typedTime = Date.now() - startTime;
        console.log(keypress);
        //lol i got it now
        console.log(Date.now() - startTime);
        //clearTimeout();
        //timeReset(); i am so dumb lol this is so easy but i am forgetting basic algebra
        let x = Number;
        let differenceInTime = (typedTime + x)
        let sixtySeconds = 60000;

        let cpm = sixtySeconds / keypress;
        console.log(cpm);
   })


   console.log(event, keypress);

}());


