// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// console.log(arr.indexOf(9));

const arr = [1,2,3,4,5];

Array.prototype.myIndexOf = function (searchElement) {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) return i;
    }
    return -1;
}


console.log(arr.myIndexOf(3));