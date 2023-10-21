// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// console.log(arr.includes("cat"));

// const arr = [1,2,3,4,5];
// const arr = ['cat', 'dog'];

Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true;
    }

    return false;
}

console.log(arr.myIncludes("cat"));
