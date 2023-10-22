// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

const arr = [1,2,3,3,2,1];

Array.prototype.myLastIndexOf = function (searchElement) {
    if (!Array.isArray(this)) return;

    for (let i = this.length - 1; i > 0; i--) {
        if (this[i] === searchElement) return i;
    }

    return -1;
}

console.log(arr.myLastIndexOf(3));