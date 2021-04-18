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
