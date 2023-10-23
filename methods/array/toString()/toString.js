// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString

export function myToString(arr) {
    if (!Array.isArray(arr)) return;
    return arr + "";
}

Array.prototype.myToString = function () {
    if (!Array.isArray(this)) return;
    return this + "";
}