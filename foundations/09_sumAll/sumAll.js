const sumAll = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2))   return "ERROR";
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    
    if (num1<0 || num2<0) return "ERROR";
    

    const initialValue = num1 < num2 ? num1 : num2;
    const finalValue = num1 > num2 ? num1 : num2;

    let sum = 0;
    for (let i = initialValue; i <= finalValue; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
