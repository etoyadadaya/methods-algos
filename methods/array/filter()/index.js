// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// console.log(arr.filter((el) => el > 2));

let arr = [1,2,3,4,5];

Array.prototype.myFilter = function (callback) {
    let tmp = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) tmp.push(this[i]);
    }

    return tmp;
}

console.log(arr.myFilter((el) => el > 2));
