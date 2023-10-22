// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// const arr = [1,2,3,4,5];
const arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

Array.prototype.mySlice = function (start, end) {
    if (!Array.isArray(this)) return;

    let tmp = [];
    let i = start || 0;
    let length = end || this.length;

    if (start < 0) {
        i = start + this.length;
    }

    if (end < 0) {
        length = end + this.length;
    }

    for (i; i < length; i++) {
        tmp.push(this[i]);
    }

    return tmp;
}

console.log(arr.mySlice());