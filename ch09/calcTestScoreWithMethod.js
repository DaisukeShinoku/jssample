class TestScore{
  constructor() {
    this.name = "";
    this.english = 0;
    this.math = 0;
    this.japanese = 0;
  }
  printScore() {
    let sum = this.english + this.math + this.japanese;
    let ave = sum / 3;
    console.log(this.name + "さんの合計" + sum + " 平均:" + ave)
  }
}

let taro = new TestScore();
taro.name = "たろう";
taro.english = 92;
taro.math = 87;
taro.japanese = 74;
taro.printScore();

let hana = new TestScore();
hana.name = "はな";
hana.english = 79;
hana.math = 95;
hana.japanese = 83;
hana.printScore();
