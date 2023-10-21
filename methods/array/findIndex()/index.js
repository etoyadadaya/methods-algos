// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// console.log(arr.findIndex((el) => el === 2));

const arr = [1,2,3,4,5];

Array.prototype.myFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return i;
    }
    return -1;
}

console.log(arr.myFindIndex((el) => el === 2));