module.exports = function() {
    const pid = process.pid;

    // var spawn = require('child_process').spawnSync;
    // var bc = spawn('bc', [], {
    //     detached: true,
    //     stdio: 'ignore'
    // });

    var spawn = require('child_process').spawn;
    var bc = spawn('bc');

    var crypto, enabled;
    try {
        crypto = require('crypto');
        enabled = true;
    } catch (err) {
        enabled = false;
    }

    var response = {
        "process_id_self": pid + 0,
        "crypto_enabled": enabled,
        "process_id_bc": bc.pid + 0
    };

    return response;
}