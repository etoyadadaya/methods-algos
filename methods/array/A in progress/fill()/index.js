// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

let arr = [1,2,3,4,5];

Array.prototype.myFill = function (value, start, end) {
    if (!Array.isArray(this)) return;

    let i = start || 0;
    let length = end || this.length;

    for (i; i < length; i++) {
        this[i] = value;
    }

    return this;
}

console.log(arr.myFill(0, 2, 4));