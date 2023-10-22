// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const arr = [1, 2, 3, [4, 5, [6, 7, [8]]]];

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

console.log(arr.myFlat(3));