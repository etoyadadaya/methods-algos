// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

export function myPush(arr, el) {
    if (!Array.isArray(arr)) return;
    arr[arr.length] = el;
    return arr.length;
}

Array.prototype.myPush = function (el) {
    if (!Array.isArray(this)) return;
    return this[this.length] = el;
}