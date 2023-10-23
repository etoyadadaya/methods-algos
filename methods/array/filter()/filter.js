// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

export function myFilter(arr, callback) {
    let tmp = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) tmp.push(arr[i]);
    }

    return tmp;
}

Array.prototype.myFilter = function (callback) {
    let tmp = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) tmp.push(this[i]);
    }

    return tmp;
}