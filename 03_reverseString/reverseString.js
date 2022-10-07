const reverseString = function(string) {
    let text = string;
    let textArray = text.split("");
    let textArrayReversed = textArray.reverse();
    let reversedText = textArrayReversed.join("");
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
