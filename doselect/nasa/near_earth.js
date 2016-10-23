// Javascript program to read an integer from STDIN and output it to STDOUT
var https = require('https');
var MIN = 0;
var MAX = 0;

process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n');
    console.log(lines)

    MIN = lines[2];
    MAX = lines[3];

    getAsteroids(lines);
})

function getAsteroids(data) {
    var options = {
        host: 'api.nasa.gov',
        path: '/neo/rest/v1/feed?start_date=' + data[0] + '&end_date=' + data[1] + '&api_key=DEMO_KEY'
    }

    console.log(options.path);
    https.request(options, cbAsteroids).end();
}

function cbAsteroids(response) {
    var str = '';
    response.on('data', function(chunk) {
        str += chunk;
    });

    var count = 0;
    response.on('end', function() {
        var data = JSON.parse(str);
        var dates = Object.keys(data.near_earth_objects);
        console.log(dates);

        dates.forEach(function(date) {
            var list = data.near_earth_objects[date];
            list.forEach(function(obj) {
                var min = obj.estimated_diameter.meters.estimated_diameter_min;
                var max = obj.estimated_diameter.meters.estimated_diameter_max;

                if ((MIN <= min && min <= MAX) && (MIN <= max && max <= MAX)) {
                    count++;
                    console.log(MIN, min, max, MAX, "BINGO!!");
                } else
                    console.log(MIN, min, max, MAX);
            });

        });

        console.log(count);
    });
}