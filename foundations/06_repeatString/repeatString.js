const repeatString = function(str, num) {
    if (num==0 || str==="") return "";
    if(num<0) return "ERROR";

    let rst="";
    for (let i=0; i<num; i++)   rst = rst + str;
    return rst;
};

// Do not edit below this line
module.exports = repeatString;
