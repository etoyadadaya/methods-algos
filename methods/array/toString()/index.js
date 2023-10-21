// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
// console.log(arr.toString());

const arr = [1,2,3,4,5];

Array.prototype.myToString = function () {
    if (!Array.isArray(this)) return;
    return this + "";
}

console.log(arr.myToString());