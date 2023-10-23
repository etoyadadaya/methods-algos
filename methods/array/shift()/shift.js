// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

export function myShift(arr) {
    let value = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }

    arr.length = arr.length - 1;
    return value;
}

Array.prototype.myShift = function () {
    let value = this[0];

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    this.length = this.length - 1;
    return value;
}