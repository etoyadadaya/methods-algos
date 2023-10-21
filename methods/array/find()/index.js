// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// arr.find((el, index, array) => ... );

const arr = [1,2,3,4,5];

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
}

console.log(arr.myFind((el) => el === 5));
