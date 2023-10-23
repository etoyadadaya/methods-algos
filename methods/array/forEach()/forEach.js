// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

export function myForEach(arr, callback) {
    if (!Array.isArray(arr)) return;

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) return arr[i];
    }
}

Array.prototype.myForEach = function (callback) {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return this[i];
    }
}