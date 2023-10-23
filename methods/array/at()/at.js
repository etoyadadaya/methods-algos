// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

export function myAt(arr, value) {
    if (!Array.isArray(arr)) return;
    return value < 0 ? arr[arr.length + value] : arr[value];
}

Array.prototype.myAt = function (value) {
    if (!Array.isArray(this)) return;

    return value < 0 ? this[this.length + value] : this[value];
}
