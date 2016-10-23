var https = require('https');

process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n');

    getAsteroid(lines[0], lines[1]);
});

function getAsteroid(id, body) {
    var options = {
        host: 'api.nasa.gov',
        path: '/neo/rest/v1/neo/' + id + '?api_key=DEMO_KEY'
    }

    https.request(options, cbApproach.bind({ body: body })).end();
}

function cbApproach(response) {
    var body = this.body;

    var str = '';
    response.on('data', function(chunk) {
        str += chunk;
    });

    var count = 0;
    response.on('end', function() {
        // console.log(body);

        var data = JSON.parse(str);

        var count = 0;
        data.close_approach_data.forEach(function(d) {
            if (d.orbiting_body === body)
                count++;
        });

        console.log(count);
    });
}