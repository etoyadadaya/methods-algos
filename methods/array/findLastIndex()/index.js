// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
// console.log(arr.findLastIndex((el) => el > 2));

const arr = [1,2,3,4,5];

Array.prototype.myFindLastIndex = function (callback) {
    for (let i = this.length; i > 0; i--) {
        if (callback(this[i], i, this)) return i;
    }
    return undefined;
}

console.log(arr.myFindLastIndex((el) => el > 2));