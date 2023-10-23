// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

export function myUnshift(arr, ...values) {
    let i = arr.length + values.length - 1;

    for(i ; i >= values.length; i--) {
        arr[i] = arr[i - values.length];
    }

    for(i; i >= 0; i--) {
        arr[i] = values[i];
    }

    return arr.length;
}

Array.prototype.myUnShift = function (...values) {
    let i= this.length + values.length -1;

    for(i ; i >= values.length; i--) {
        this[i] = this[i - values.length];
    }

    for(i; i >= 0; i--) {
        this[i] = values[i];
    }

    return this;
}