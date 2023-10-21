// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

let arr = [1,2,3,4,5];

Array.prototype.myReverse = function() {
    if (!Array.isArray(this)) return;

    for (let i = 0; i < this.length / 2; i++) {
        let leftPointer = this[i];
        let rightPointer = this[this.length - i - 1];
        let tmp = leftPointer;

        this[i] = rightPointer;
        this[this.length - i - 1] = tmp;
    }

    return this;
}

console.log(arr.myReverse());