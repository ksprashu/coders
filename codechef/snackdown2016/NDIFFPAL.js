const readline = require('readline');
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

var lines = 0;
var T;
const alpha = "abcdefghijklmnopqrstuvwxyz"

rl.on('line', function(data) {
    if (lines === 0) {
        T = parseInt(data);
    } else {
        N = parseInt(data);
        executeTest(N);
    }

    lines++;
});

function executeTest(N) {
    var str = '';
    var loops = Math.floor(N / 26);
    var remain = N % 26;
    // console.log('loops = ' + loops + ', remain = ' + remain);
    for (var i = 0; i < loops; i++) {
        str += alpha.slice(0, 26);
    }
    str += alpha.slice(0, remain);

    console.log(str);
}