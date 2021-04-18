// たろうさん用のTestScoreWithConstructorを使ってデータ表示
let taro = new TestScoreWithConstructor("たろう", 92, 87, 74);
taro.printScore();

// はなこさん用のTestScoreWithConstructorを使ってデータ表示
let hana = new TestScoreWithConstructor("はなこ", 79, 95, 83);
hana.printScore();

// hanaオブジェクトのscienceプロパティに89を代入
hana.science = 89;
// hanaオブジェクトのscienceプロパティを表示
console.log("はなこさんの理科の点: " + hana.science);
// taroオブジェクトのscienceプロパティを表示
console.log("たろうさんの理科の点: " +taro.science);

