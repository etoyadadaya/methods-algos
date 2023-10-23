// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find

export function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) return arr[i];
    }

    return undefined;
}

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return this[i];
    }

    return undefined;
}