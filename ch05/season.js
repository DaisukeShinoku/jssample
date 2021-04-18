let num = Math.round(Math.random() * 12);
console.log("現在の月:" + num + "月");
switch(num) {
  case 3:
  case 4:
  case 5:
    console.log("春です");
    break;
  case 6:
    console.log("梅雨です");
    break;
  case 7:
  case 8:
  case 9:
    console.log("夏です");
    break;
  case 10:
  case 11:
    console.log("秋です");
    break;
  case 1:
  case 2:
  case 12:
    console.log("冬です");
    break;
  default:
    console.log("やばいです");
    break;
}