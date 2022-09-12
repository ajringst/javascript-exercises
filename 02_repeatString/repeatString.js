let word = '';

const repeatString = function(string, num) {
    word = string;
    let finalPhrase = '';
    if (num < 0){
        return 'ERROR';
    }
    else {
        for (i = 0 ; i < num ; i++){
            finalPhrase += word;
        }
        return finalPhrase;
    }
};

// Do not edit below this line
module.exports = repeatString;
