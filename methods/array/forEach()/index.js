// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach((el) => console.log(el ** 2));

const arr = [1,2,3,4,5];

Array.prototype.myForEach = function (callback) {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return this[i];
    }
}

arr.myForEach((el) => console.log(el ** 2));