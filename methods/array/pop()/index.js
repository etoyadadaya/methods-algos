// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// console.log(arr.pop());
// console.log(arr);

let arr = [1,2,3,4,5];

Array.prototype.myPop = function () {
    const value = this[this.length - 1];
    this.length = this.length - 1;
    return value;
}

console.log(arr.myPop());
console.log(arr);
console.log(arr.myPop());
console.log(arr);
console.log(arr.myPop());
console.log(arr);
console.log(arr.myPop());
console.log(arr);
console.log(arr.myPop());
console.log(arr);