/*
# upcoming goals

add $HOME
add config options

# thoughts

-- data flow should be something like --

keyUp listener = done
increment keypress variable = kinda done, need to look at node keyboard interface

start new typing object thingy
calculate cpm based on typing thing
translate cpm to wpm (/5 lol)
render wpm 

-- other thoughts --

Okay so i need a self invoked function here to just listen to all key events when the application is running?

# unanswered questions

how does running a node app as a background process work?

look up how to add progress bar type thing as it runs

what sort of windows aren't going to be able to capture key events? i.e. someone playing a fullscreen videogame?


*/

const fs = require('fs');
const eol = require('os').EOL;
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let config = {}


function pipeStatisticsToJson(feed) {
  console.log("woo");
  fs.readFile();
}
function calculateWPM() {
  console.log("woo2");
}
function runsOnNewKeypressTime(){

}
function registerTypingEvent() {

}

process.stdin.on('keypress', (str, key) => {
    console.log(key);

    if (key.ctrl && key.name === 'c') {
      process.exit(); // eslint-disable-line no-process-exit
    } 
});

console.log("logging your keypresses...");