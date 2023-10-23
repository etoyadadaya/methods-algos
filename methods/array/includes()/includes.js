// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

export function myIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true;
    }

    return false;
}

Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true;
    }

    return false;
}