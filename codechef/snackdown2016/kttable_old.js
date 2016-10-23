const readline = require('readline');
const fs = require('fs');
const Promise = require('bluebird');

var inFileName, outFileName;

function readArgs() {
    return new Promise(function(resolve, reject) {
        if (process.argv.length !== 3 && process.argv.length !== 4) {
            console.log('nothing to do');
            return reject();
        }

        resolve(process.argv[2]);
    });
}

function readInput(fileName) {
    return new Promise(function(resolve, reject) {
        const rl = readline.createInterface({
            input: fs.createReadStream(fileName)
        });

        var inputContent = [];

        rl.on('line', function(line) {
            inputContent.push(line);
        });

        rl.on('close', function() {
            resolve(inputContent);
        })
    });
}

function processInput(content) {
    return new Promise(function(resolve, reject) {
        if (!content)
            return reject();

        var testCases = [];
        var countTests = content[0];
        for (var t = 0, i = 1; t < countTests; t++) {
            var numStudents = content[i++];
            var endTimes = content[i++].split(' ');
            var actualTimes = content[i++].split(' ');

            var testCase = {
                numStudents: numStudents,
                endTimes: endTimes,
                actualTimes: actualTimes
            }

            testCases.push(testCase);
        }

        resolve(testCases);
    });
}

function runTests(testCases) {
    return new Promise(function(resolve, reject) {
        var outputContent = [];
        Promise.mapSeries(testCases, function(testCase) {
                testCase.intervals = [];
                testCase.intervals.push(testCase.endTimes[0] - 0);

                for (var i = 1; i < testCase.endTimes.length; i++) {
                    var interval = testCase.endTimes[i] - testCase.endTimes[i - 1];
                    testCase.intervals.push(interval);
                }

                var count = 0;
                for (var i = 0; i < testCase.actualTimes.length; i++) {
                    if (parseInt(testCase.actualTimes[i]) <= testCase.intervals[i])
                        count++
                }

                outputContent.push(count);
            })
            .then(function() {
                resolve(outputContent);
            });
    });
}

function writeOutput(content) {
    return new Promise(function(resolve, reject) {
        if (content.length > 0) {
            if (outFileName) {
                fs.writeFile(outFileName, Buffer.from(content), function(err) {
                    if (err)
                        reject(err);

                    resolve();
                })
            } else {
                content.forEach(function(data, index) {
                    console.log(data);
                })
                resolve();
            }
        } else {
            console.log('Error! nothing to output');
            reject();
        }
    });
}

function main() {
    // console.log('starting...');
    Promise.delay(10)
        .then(readArgs)
        .then(readInput)
        .then(processInput)
        .then(runTests)
        .then(writeOutput)
        .then(function() {
            // console.log('done');
        })
        .catch(function(err) {
            console.log('error: ' + err);
        })
}

main();