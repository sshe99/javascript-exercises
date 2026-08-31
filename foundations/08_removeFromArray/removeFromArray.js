const removeFromArray = function (arr, ...args) {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (const j of args) {
            const idx = arr.indexOf(j);
            if (idx !== -1) {
                arr.splice(idx, 1);
            }
        }
    }

    return arr;
};

const arr = [1,2,3,4];
removeFromArray(arr,3,2);
console.log(arr);

// Do not edit below this line
module.exports = removeFromArray;
