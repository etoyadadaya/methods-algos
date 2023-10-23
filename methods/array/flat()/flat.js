// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

export function myFlat(arr, depth = 1) {
    const flattened = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth) {
            flattened.push(...myFlat(arr[i], depth - 1));
        } else {
            flattened.push(arr[i]);
        }
    }

    return flattened;
}

Array.prototype.myFlat = function (depth = 1) {
    const flattened = [];

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth) {
            flattened.push(...this[i].myFlat(depth - 1));
        } else {
            flattened.push(this[i]);
        }
    }

    return flattened;
}