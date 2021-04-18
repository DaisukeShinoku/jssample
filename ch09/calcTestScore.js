function printScore(name, english, math, japanese) {
  let sum = english + math + japanese;
  let ave = sum / 3;
  console.log(name + "さんの合計" + sum + "平均: =>" + ave);
}

let taroName = "たろう";
let taroEng = 92;
let taroMath = 87;
let taroJapa = 74;
printScore(taroName, taroEng, taroMath, taroJapa);

let hanaName = "はなこ";
let hanaEng = 79;
let hanaMath = 95;
let hanaJapa = 83;
printScore(hanaName, hanaEng, hanaMath, hanaJapa);

