// Javascript program to read an integer from STDIN and output it to STDOUT
var https = require('https');

process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n');
    var term = lines[0];

    getPatent(term);
})

function getPatent(term) {
    var options = {
        host: 'api.nasa.gov',
        path: encodeURI('/patents/content?api_key=DEMO_KEY&limit=20&query=' + term)
    }

    https.request(options, cbPatents).end();
}

function cbPatents(response) {
    var str = '';

    response.on('data', function(chunk) {
        str += chunk;
    });

    response.on('end', function() {
        var data = JSON.parse(str);
        var emails = data.results.map(function(item) {
            return item.contact.email;
        });

        emails.sort(function(a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();

            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        });

        var emailMap = {};

        emails.forEach(function(email) {
            if (!emailMap.hasOwnProperty(email)) {
                console.log(email);
                emailMap[email] = true;
            }
        });
    });
}