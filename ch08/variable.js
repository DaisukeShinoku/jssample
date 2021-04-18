function concatenate(...name){
  let concatenatedName = "";
  for(let i= 0; i < name.length; i++) {
    concatenatedName += name[i];
    if(i != name.length - 1){
      concatenatedName += "."
    }
  }
  return concatenatedName;
}

let lName = "中田";
let fName = "雄二";
let name1 = concatenate(lName, fName);
console.log("結合結果: " + name1);

let picasso = concatenate("fafaf", "hoge", "gefa", "fafaf", "dafaf", "fafaf", "fafaf");
console.log("長い名前:" + picasso);
