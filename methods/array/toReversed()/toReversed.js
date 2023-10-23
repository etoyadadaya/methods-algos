// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed

export function myToReversed(arr) {
    if (!Array.isArray(arr)) return;

    let tmp = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        tmp.push(arr[i]);
    }

    return tmp;
}

Array.prototype.myToReversed = function () {
    if (!Array.isArray(this)) return;

    let tmp = [];

    for (let i = this.length - 1; i >= 0; i--) {
        tmp.push(this[i]);
    }

    return tmp;
}