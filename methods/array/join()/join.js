// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

export function myJoin(arr, separator) {
    if (!Array.isArray(arr)) return;

    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (separator || separator === "" && i < arr.length - 1) {
            if (i === arr.length - 1) {
                str += arr[i];
            } else {
                str += `${arr[i] + separator}`;
            }
        } else if (!separator && i < arr.length - 1) {
            str += `${arr[i] + ","}`;
        } else {
            str += arr[i];
        }
    }

    return str;
}

Array.prototype.myJoin = function (separator) {
    if (!Array.isArray(this)) return;

    let str = "";

    for (let i = 0; i < this.length; i++) {
        if (separator || separator === "" && i < this.length - 1) {
            if (i === this.length - 1) {
                str += this[i];
            } else {
                str += `${this[i] + separator}`;
            }
        } else if (!separator && i < this.length - 1) {
            str += `${this[i] + ","}`;
        } else {
            str += this[i];
        }
    }

    return str;
}
