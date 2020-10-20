/*
DATA FLOWWWW

keyUp listener = done
increment keypress variable = kinda done, need to look at node keyboard interface

start new typing object thingy
calculate cpm based on typing thing
translate cpm to wpm (/5 lol)
render wpm 
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