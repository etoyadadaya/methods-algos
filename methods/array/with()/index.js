// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with

let arr = [1,2,3,4,5];

Array.prototype.myWith = function (index, value) {
    if (!Array.isArray(this)) return;

    let tmp = [];

    for (let i = 0; i < this.length; i++) {
        if (i !== index) {
            tmp.push(this[i]);
        } else {
            this[i] = value;
            tmp.push(this[i]);
        }
    }

    return tmp;
}

console.log(arr.myWith(2, 33));