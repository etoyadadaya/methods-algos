// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

export function myLastIndexOf(arr, searchElement) {
    if (!Array.isArray(arr)) return;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === searchElement) return i;
    }

    return -1;
}

Array.prototype.myLastIndexOf = function (searchElement) {
    if (!Array.isArray(this)) return;

    for (let i = this.length - 1; i > 0; i--) {
        if (this[i] === searchElement) return i;
    }

    return -1;
}