// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

let arr = [1,2,3,4,5];

Array.prototype.myAt = function (value) {
    if (!Array.isArray(this)) return;

    return value < 0 ? this[this.length + value] : this[value];
}

console.log(arr.myAt(-1));
