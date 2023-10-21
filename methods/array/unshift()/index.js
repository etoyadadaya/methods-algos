// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

let arr = [1,2,3];

Array.prototype.myUnShift = function (...values) {
    let i= this.length + values.length -1;

    for(i ; i >= values.length; i--) {
        this[i] = this[i - values.length];
    }

    for(i; i >= 0; i--) {
        this[i] = values[i];
    }

    return this;
}

console.log(arr.myUnShift(4, 5, 6));
console.log(arr);