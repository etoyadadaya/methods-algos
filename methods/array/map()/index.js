// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// arr.map((el, index, array) => ...);

let arr = [1,2,3];

Array.prototype.myMap = function(callback) {
  if (!Array.isArray(this)) return;
  let tmp  = [];

  for (let i = 0; i < this.length; i++) {
    tmp.push(callback(this[i], i, this));
  }
  return tmp;
}

arr.myMap((el, index, array) => console.log([el, index], array));
