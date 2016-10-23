var proc = require('./process.js');

var resp = proc();

console.log(JSON.stringify(resp, null, 2));

setTimeout(function() {
    // process.kill(resp.process_id_bc);
    console.log('done')
}, 10000);