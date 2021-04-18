class TestScore{
  constructor() {
    this.name = "";
    this.english = 0;
    this.math = 0;
    this.japanese = 0;
  }
}

function printScore(student) {
  let sum = student.english + student.math + student.japanese;
  let ave = sum / 3;
  console.log(student.name + "さんの合計" + sum + "平均: =>" + ave);
}

let taro = new TestScore();
taro.name = "たろう";
taro.english = 92;
taro.math = 87;
taro.japanese = 74;
printScore(taro);

let hana = new TestScore();
hana.name = "はな";
hana.english = 79;
hana.math = 95;
hana.japanese = 83;
printScore(hana);
