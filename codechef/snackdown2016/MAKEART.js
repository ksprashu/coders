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

rl.on('line', function(data) {
    if (lines === 0) {
        // T = parseInt(data);
    } else {
        if (lines % 2 === 1) {
            // n = parseInt(data);
        } else {
            N = data.split(' ');
            executeTest(N);
        }
    }

    lines++;
});

function executeTest(N) {
    var seq = 0;
    for (i = 0; i < N.length - 2; i++) {
        if (N[i] === N[i + 1] && N[i] === N[i + 2]) {
            console.log('Yes');
            return 0;
        }
    }
    console.log('No');
}