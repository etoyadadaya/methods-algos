// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

const arr = [1, 2, 1];

// TODO: some problems
Array.prototype.myFlatMap = function (callback) {
    const flattened = [];

    for (let i = 0; i < this.length; i++) {
        flattened.push(callback(this[i], i, this));

    }

    return flattened;
}

console.log(arr.myFlatMap((num) => (num === 2 ? [2, 2] : 1)));