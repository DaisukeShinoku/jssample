function calcArraySum(list) {
  let sum = 0;
  for(let num of list) {
    sum += num;
  }
  return sum
}

function calcAve(list) {
  let sum = calcArraySum(list);
  let length = list.length;
  return sum / length;
}

let list1 = [5, 6, 10, 55, 4, 9];
let list2 = [2, 7, 66, 4, 9];
let list3 = [8, 6, 13, 6, 9, 11, 5];

console.log("list1の合計:" + calcArraySum(list1) + ";平均" + calcAve(list1));
console.log("list2の合計:" + calcArraySum(list2) + ";平均" + calcAve(list2));
console.log("list3の合計:" + calcArraySum(list3) + ";平均" + calcAve(list3));
