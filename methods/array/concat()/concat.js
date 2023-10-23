// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

export function myConcat(arr, ...values) {
    let tmp = [...arr];

    for (let i = 0; i < values.length; i++) {
        if (Array.isArray(values[i])) {
            tmp.push(...values[i]);
        } else {
            tmp.push(values[i]);
        }
    }

    return tmp;
}

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