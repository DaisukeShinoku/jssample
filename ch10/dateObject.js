// 2011年10月5日のDateObjectを作成
let jobs = new Date(2011, 9, 5);
// Jobsを文字列で表示
console.log("Jobsの命日: " + jobs.toDateString());
// Jobsを現在のロケールにあった文字列に整形して表示
console.log("ジョブスの命日: " + jobs.toLocaleDateString());

// Jobsの月だけ取得
let month = jobs.getMonth();
// Jobsを１ヶ月進める
jobs.setMonth(month + 1);
console.log("１ヶ月後: " + jobs.toLocaleDateString());

// Jobsの日だけ取得
let date = jobs.getDate();
// Jobsの日を６日戻す
jobs.setDate(date - 6);
console.log("6日前: " + jobs.toLocaleDateString());