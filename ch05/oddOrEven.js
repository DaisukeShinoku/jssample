let num = Math.round(Math.random() * 100);
console.log("現在の値:" + num);
let rem = num % 2;
if(rem == 0) {
  console.log("偶数です")
} else {
  console.log("奇数です")
}
console.log("計算終了");