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
    } else {
        var word, k;
        word = data.split(' ')[0];
        k = data.split(' ')[1];
        executeTest(word, k);
    }

    lines++;
});

function executeTest(word, k) {
    var dict = {};
    for (var i = 0; i < word.length; i++) {
        if (!dict.hasOwnProperty(word[i])) {
            dict[word[i]] = 1;
        } else {
            ++dict[word[i]];
        }
    }

    var words = [];
    var keys = Object.keys(dict);
    words.push(dict[keys[0]]);

    // console.log(word);
    // console.log(dict);

    for (var j = 1; j < keys.length; j++) {
        var done = false;
        for (var i = 0; i < words.length; i++) {
            if (dict[keys[j]] >= words[i]) {
                words.splice(i, 0, dict[keys[j]]);
                done = true;
                break;
            }
        }

        if (!done) {
            words.splice(words.length - 1, 0, dict[keys[j]]);
        }
    }

    console.log(words);
    console.log(k);

    K = words[0] - words.slice(-1);
    var res = 0;
    if (K > k) {
        var diff = K - k;

    } else {
        console.log(0);
    }
}


function countFactor(num) {
    if (num === 1) {
        return 1;
    } else {
        return 1 + countFactor(Math.floor(num / 2));
    }
}