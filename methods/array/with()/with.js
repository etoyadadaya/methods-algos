// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with

export function myWith(arr, index, value) {
    if (!Array.isArray(arr)) return;

    let tmp = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            tmp.push(arr[i]);
        } else {
            arr[i] = value;
            tmp.push(arr[i]);
        }
    }

    return tmp;
}

Array.prototype.myWith = function (index, value) {
    if (!Array.isArray(this)) return;

    let tmp = [];

    for (let i = 0; i < this.length; i++) {
        if (i !== index) {
            tmp.push(this[i]);
        } else {
            this[i] = value;
            tmp.push(this[i]);
        }
    }

    return tmp;
}