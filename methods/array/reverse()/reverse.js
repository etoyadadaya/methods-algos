// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

export function myReverse(arr) {
    if (!Array.isArray(arr)) return;

    for (let i = 0; i < arr.length / 2; i++) {
        let leftPointer = arr[i];
        let rightPointer = arr[arr.length - i - 1];
        let tmp = leftPointer;

        arr[i] = rightPointer;
        arr[arr.length - i - 1] = tmp;
    }

    return arr;
}

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