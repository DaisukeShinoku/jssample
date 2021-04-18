let breakPoint = Math.round(Math.random() * 10);
console.log("breakPoint:" + breakPoint);
for(let i = 1; i <= 10; i++) {
  console.log(i + "回目開始")
  if(i === breakPoint){
    console.log("BREAK!!!!!!");
    break;
  }
  console.log(i + "回目終了")
}