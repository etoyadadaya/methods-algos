// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// arr.map((el, index, array) => ...);

export function myMap(arr, callback) {
  if (!Array.isArray(arr)) return;

  let tmp  = [];

  for (let i = 0; i < arr.length; i++) {
    tmp.push(callback(arr[i], i, arr));
  }

  return tmp;
}

Array.prototype.myMap = function(callback) {
  if (!Array.isArray(this)) return;
  let tmp  = [];

  for (let i = 0; i < this.length; i++) {
    tmp.push(callback(this[i], i, this));
  }
  return tmp;
}