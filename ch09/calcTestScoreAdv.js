class TestScore{
  constructor() {
    this.name = "";
    this.english = 0;
    this.math = 0;
    this.japanese = 0;
  }
  setData(name = "", english = 0, math = 0, japanese = 0) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanese = japanese;
  }
  calcSum() {
    let sum = this.english + this.math + this.japanese;
    return sum; 
  }
  calcAve() {
    let sum = this.calcSum();
    let ave = sum / 3;
    return ave;
  }
  printScore() {
    let sum = this.calcSum();
    let ave = this.calcAve();
    console.log(this.name + "さんの合計" + sum + " 平均:" + ave)
  }
}

let taro = new TestScore();
taro.setData("たろう", 92, 87, 74);
taro.printScore();

let hana = new TestScore();
hana.setData("はなこ", 79, 95, 83);
hana.printScore();

let taroSum = taro.calcSum();
let hanaSum = hana.calcSum();
let ave2 = (taroSum + hanaSum) / 2;
console.log("二人の合計の平均:" + ave2);

let taroAve = taro.calcAve();
let hanaAve = hana.calcAve();
let aveAve = (taroAve + hanaAve) / 2;
console.log("二人の平均の平均:" + aveAve);
