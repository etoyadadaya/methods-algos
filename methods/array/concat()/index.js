// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

let arr = [1,2,3];

Array.prototype.myConcat = function (...values) {
    let tmp = [...this];

    for (let i = 0; i < values.length; i++) {
        if (Array.isArray(values[i])) {
            tmp.push(...values[i]);
        } else {
            tmp.push(values[i]);
        }
    }

    return tmp;
}

console.log(arr.myConcat([6,7,8],9,10));