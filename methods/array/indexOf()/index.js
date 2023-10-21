// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// const arr = [1,2,3,4,5];
const arr = [2,9,9];

// TODO: A little bit more logic
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
    if (!Array.isArray(this)) return;

    let index = fromIndex || 0;

    if (index < 0) {
        for (let i = this.length - index + 1; i > 0; i--) {
            if (this[i] === searchElement) return i;
        }
    } else {
        for (let i = index; i < arr.length; i++) {
            if (this[i] === searchElement) return i;
        }
    }

    return -1;
}

// console.log(arr.indexOf(7));
console.log(arr.indexOf(2, -3));

// console.log(arr.myIndexOf(7));
console.log(arr.myIndexOf(2, -3));
