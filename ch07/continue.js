let contPoint = Math.round(Math.random() * 10);
console.log("contPoint:" + contPoint);
for(let i = 1; i <= 10; i++) {
  console.log(i + "回目開始")
  if(i === contPoint){
    console.log("CONTINUE!!!!!!");
    continue;
  }
  console.log(i + "回目終了")
}