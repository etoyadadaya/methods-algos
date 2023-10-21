// arr.map((el, index, array) => ...);
let arr = [1,2,3];

function myMap (callback) {
  if (!Array.isArray(this)) return;
  let tmp  = [];

  for (let i = 0; i < this.length; i++) {
    tmp.push(callback(this[i], i, this));
  }
  return tmp;
}

Array.prototype.myMap = myMap;

arr.myMap((el, index, array) => console.log([el, index], array));
