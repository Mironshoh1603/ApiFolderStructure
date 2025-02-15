let uniqueElement = function () {
  let obj = {};

  for (let value of this) {
    obj[value] ? obj[value]++ : (obj[value] = 1);
  }
  for (item in obj) {
    if (obj[item] == 1) return item;
  }
};

let arr = [2, 2, 4, 5, 6, 3, 3, 4, 5, 6, 6, 7, 5, 4];
Array.prototype.uniqueElement = uniqueElement;
console.log(arr.uniqueElement());
