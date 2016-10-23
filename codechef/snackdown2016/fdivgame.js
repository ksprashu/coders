const readline = require('readline');
const fs = require('fs');

var T;

process.stdin.resume();
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

var lines = 0;
var tc = {};

rl.on('line', function(data) {
    if (lines === 0) {
        T = parseInt(data);
    }

    if (lines % 2 === 1) {
        tc.N = parseInt(data);
    }

    if (lines > 0 && lines % 2 === 0) {
        tc.A = data.split(' ');

        executeTest(tc);
        tc = {};
    }

    lines++;
});

function executeTest(tc) {
    var count = 0;
    for (var i = 0; i < tc.A.length; i++) {
        count += countFactor(parseInt(tc.A[i]));
    }

    if (count % 2 === 0)
        console.log('Derek');
    else
        console.log('Henry');
}

function countFactor(num) {
    if (num === 1) {
        return 1;
    } else {
        return 1 + countFactor(Math.floor(num / 2));
    }
}