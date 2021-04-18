function concatenateSpace(lastName, firstName) {
  return lastName + " " + firstName;
}

function concatenateDot(lastName, firstName) {
  return lastName + "・" + firstName;
}

let lName = "中田";
let fName = "雄二";

let funclist = [concatenateSpace, concatenateDot];

for(let func of funclist){
  let name = func(lName, fName);
  console.log("結合結果:" + name);
}