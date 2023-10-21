// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed

const arr = [1,2,3,4,5];

Array.prototype.myToReversed = function () {
    if (!Array.isArray(this)) return;

    let tmp = [];

    for (let i = this.length - 1; i >= 0; i--) {
        tmp.push(this[i]);
    }

    return tmp;
}

console.log(arr.myToReversed());