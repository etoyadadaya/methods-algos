// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast
// console.log(arr.findLast((el) => el > 4));

let arr = [1,2,3,4,5];

Array.prototype.myFindLast = function (callback) {
    for (let i = this.length; i > 0; i--) {
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
}

console.log(arr.myFindLast((el) => el > 4));