// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let arr = [1,2,3];

Array.prototype.mySplice = function (start, deleteCount, ...values) {
    if (!Array.isArray(this)) return;
    // TODO: looks like a trouble, try to implement later
}

// console.log(arr.splice(1));
// console.log(arr.mySplice(1));