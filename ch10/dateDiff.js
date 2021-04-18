// 2011年10月5日のDateObjectを作成
let jobs = new Date(2011, 9, 5);
// jobsのUNIXエポックからのミリ秒を取得
let jobsMills = jobs.getTime();

// 現在日時
let now = new Date();
console.log("現在の日時: " + now.toLocaleString());
// nowのUNIXエポックからのミリ秒を取得
let nowMills = now.getTime();
// jobsとnowのミリ秒差分
let diffMills = nowMills - jobsMills;
// 差分のミリ秒を日に換算し表示
let diffDate = diffMills / (1000 * 60 * 60 * 24);
console.log("ジョブスの明日からの経過日： " + Math.floor(diffDate) + "日");