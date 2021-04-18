function calcArraySum(list) {
  let sum = 0;
  for(let num of list) {
    sum += num;
  }
  return sum
}

let list1 = [5, 6, 10, 55, 4, 9];
let list2 = [2, 7, 66, 4, 9];
let list3 = [8, 6, 13, 6, 9, 11, 5];

console.log("list1の合計" + calcArraySum(list1));
console.log("list2の合計" + calcArraySum(list2));
console.log("list3の合計" + calcArraySum(list3));