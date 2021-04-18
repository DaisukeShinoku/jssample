let nums = [];
for(let i = 0; i < 30; i++) {
  nums[i] = Math.round(Math.random() * 100);
  console.log((i+1) + "番目の数は" + nums[i])
}

let sum = 0;
let max = 0;
for(let num of nums) {
  sum += num;
  if(num > max) {
    max = num;
  }
}
let ave = sum / nums.length;
console.log("合計:" + sum);
console.log("最大:" + max);
console.log("平均:" + ave);