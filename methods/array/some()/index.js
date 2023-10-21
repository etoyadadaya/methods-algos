// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// console.log(arr.some((el) => el % 2 === 0));

const arr = [1,2,3,4,5];

Array.prototype.mySome = function (callback) {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return true;
    }

    return false;
}

console.log(arr.mySome((el) => el % 2 === 0));