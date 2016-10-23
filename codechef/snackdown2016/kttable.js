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

    if (lines % 3 === 1) {
        tc.N = parseInt(data);
    }

    if (lines % 3 === 2) {
        tc.A = data.split(' ');
        tc.A = tc.A.map(function(v, i) {
            if (i === 0)
                return v;
            else
                return v - tc.A[i - 1];
        });
    }

    if (lines > 0 && lines % 3 === 0) {
        tc.B = data.split(' ');
        executeTest(tc);
        tc = {};
    }

    lines++;
});

function executeTest(tc) {
    var count = 0;
    for (var i = 0; i < tc.B.length; i++) {
        if (parseInt(tc.B[i]) <= tc.A[i])
            count++
    }

    console.log(count);
}