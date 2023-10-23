// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

export function myIndexOf(arr, searchElement) {
    if (!Array.isArray(arr)) return;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) return i;
    }

    return -1;
}

Array.prototype.myIndexOf = function (searchElement) {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) return i;
    }

    return -1;
}