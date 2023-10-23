// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

export function myPop(arr) {
    const value = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return value;
}

Array.prototype.myPop = function () {
    const value = this[this.length - 1];
    this.length = this.length - 1;
    return value;
}