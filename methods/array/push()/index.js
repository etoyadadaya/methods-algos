// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// arr.push(10);

let arr = [1,2,3,4];

Array.prototype.myPush = function (el) {
    if (!Array.isArray(this)) return;
    return this[this.length] = el;
}

arr.myPush(5);
console.log(arr);