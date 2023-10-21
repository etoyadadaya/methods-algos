// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// console.log(arr.every((el) => el > 0));

const arr = [1,2,3,4,5];

Array.prototype.myEvery = function (callback) {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) return false;
    }

    return true;
}

console.log(arr.myEvery((el) => el > 0));
