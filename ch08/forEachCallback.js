function printErement(curretValue, index, array) {
  console.log((index + 1) + "個目の値：" + curretValue);
}

let list = [2, 7, 66, 4, 9];
list.forEach(printErement);