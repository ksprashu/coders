isEqual = function (arr1, arr2) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2))
        return true;
    else
        return false;

};

PalindromeLengthPuzzle = function (input1)
    { 
        //Write code here
        var students = input1;
        var arrStr = [];

        var letters = students.map(function (name) { return name[0]; });
        
        for(i = 0; i < letters.length; i++) {
           subStr = letters.slice(i);

            if (isEqual(subStr, subStr.slice().reverse()))
                arrStr.push(subStr.length);



        }

        return 0;
    };

var input = [ 'Bharti', 'Bharat', 'Akash', 'Bhavya', 'Chand', 'Brijesh', 'Chetak', 'Arvind', 'Bhavna' ];

console.log(PalindromeLengthPuzzle(input));