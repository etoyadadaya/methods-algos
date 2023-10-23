// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex

export function myFindLastIndex(arr, callback) {
    for (let i = arr.length; i > 0; i--) {
        if (callback(arr[i], i, arr)) return i;
    }

    return -1;
}

Array.prototype.myFindLastIndex = function (callback) {
    for (let i = this.length; i > 0; i--) {
        if (callback(this[i], i, this)) return i;
    }

    return undefined;
}