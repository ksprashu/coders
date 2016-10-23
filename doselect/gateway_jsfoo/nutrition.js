var http = require('http');

// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    var lines = chunk.toString().split('\n');
    var food = lines[0];

    getFoodId(food, foodIdCallback);
});

function getFoodId(food, callback) {
    var options = {
        host: 'api.nal.usda.gov',
        path: encodeURI('/ndb/search?api_key=DEMO_KEY&format=json&max=1&q=' + food)
    };

    http.request(options, callback).end();
}

function foodIdCallback(response) {
    var str = '';

    response.on('data', function(chunk) {
        str += chunk;
    });

    response.on('end', function() {
        var response = JSON.parse(str);
        var ndbno = response.list.item[0].ndbno;

        getNutrient(ndbno, nutrientCallback);
    });
}

function getNutrient(foodId, callback) {
    var options = {
        host: 'api.nal.usda.gov',
        path: encodeURI('/ndb/reports?api_key=DEMO_KEY&format=json&type=b&ndbno=' + foodId)
    };

    http.request(options, callback).end();
}

function nutrientCallback(response) {
    var str = '';

    response.on('data', function(chunk) {
        str += chunk;
    });

    response.on('end', function() {
        var response = JSON.parse(str);
        var proteins = response.report.food.nutrients.filter(function(n) {
            if (n.nutrient_id == 203)
                return true;
        });

        console.log(proteins[0].value + proteins[0].unit);
    });
}