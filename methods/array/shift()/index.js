// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// console.log(arr.shift());
// console.log(arr);

let arr = [1,2,3,4,5];

Array.prototype.myShift = function () {
    let value = this[0];

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    this.length = this.length - 1;
    return value;
}

console.log(arr.myShift());
console.log(arr);