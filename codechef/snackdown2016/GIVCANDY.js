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
        inp = data.split(' ');
        executeTest(inp);
    }

    lines++;
});

function slope(A, B) {
    var y1 = A + B * 1;
    var y2 = A + B * 2;

    return (y2 - y1) / 1;
}

function executeTest(inp) {
    var A = parseInt(inp[0]);
    var B = parseInt(inp[1]);
    var C = parseInt(inp[2]);
    var D = parseInt(inp[3]);

    if (A === B) {
        console.log(0);
        return;
    }

    if (C > D) {

    }

    if (C === D) {
        console.log(Math.abs(A - B));
        return;
    }

    var s1 = slope(A, C);
    var s2 = slope(B, D);

    if (s1 !== s2) {
        console.log(0);
        return;
    }

    console.log(Math.abs(A - B));
}