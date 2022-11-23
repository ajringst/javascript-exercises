const fibonacci = function(num) {
    let trueNum = num *1;
    let value = 1;
    let next1 = 0;
    let next2 = 1;
    if(trueNum <= 0){
        return "OOPS";
    }
    else{
        for(let i = 0; i < trueNum; i++){
        if(i % 2 !== 0){
            next1 += next2;
            value = next1;
        }
        else{
            next2 += next1;
            value = next2;
        }
        }
        return value;
    }
};
// Do not edit below this line
module.exports = fibonacci;
