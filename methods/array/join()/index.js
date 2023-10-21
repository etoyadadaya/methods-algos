// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// console.log(arr.join());

const arr = ['Fire', 'Air', 'Water'];

Array.prototype.myJoin = function (separator) {
    if (!Array.isArray(this)) return;

    let str = "";

    for (let i = 0; i < this.length; i++) {
        if (separator || separator === "" && i < this.length - 1) {
            if (i === this.length - 1) {
                str += this[i];
            } else {
                str += `${this[i] + separator}`;
            }
        } else if (!separator && i < this.length - 1) {
            str += `${this[i] + ","}`;
        } else {
            str += this[i];
        }
    }

    return str;
}

console.log(arr.myJoin());