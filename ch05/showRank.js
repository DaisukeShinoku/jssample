let score = Math.round(Math.random() * 100);
console.log("得点：" + score);
if (score >= 80) {
  console.log("優")
} else if (score >= 70) {
  console.log("良")
} else if (score >= 60) {
  console.log("可")
} else {
  console.log("不可")
}
console.log("Done!!!!");