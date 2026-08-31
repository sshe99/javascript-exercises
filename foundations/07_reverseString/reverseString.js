const reverseString = function(str) {
    const strArray = str.split("");
    //inverting array 
    let p1=0; p2=strArray.length -1;
    while(p1<p2){
        [strArray[p1], strArray[p2]] = [strArray[p2], strArray[p1]];
        p1++; p2--;
    }

    return strArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
