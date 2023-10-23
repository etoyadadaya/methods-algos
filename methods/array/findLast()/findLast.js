// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast

export function myFindLast(arr, callback) {
    for (let i = arr.length; i > 0; i--) {
        if (callback(arr[i], i, arr)) return arr[i];
    }

    return undefined;
}

Array.prototype.myFindLast = function (callback) {
    for (let i = this.length; i > 0; i--) {
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
}
