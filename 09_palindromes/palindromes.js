const palindromes = function (word) {
    let onlyAlpha = word.replace(/\W/g, '');
    let allLower = onlyAlpha.toLowerCase();
    let length = allLower.length;
    let i = 0;
    while(i < length){
        if(allLower.charAt(i) != allLower.charAt((length - 1 -i))) {
            return false;
            break;
        };
        i += 1;
        };
    return true;
    };

// Do not edit below this line
module.exports = palindromes;
