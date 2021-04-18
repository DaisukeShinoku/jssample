class TestScoreExtended extends TestScoreWithConstructor {
  // コンストラクタの設定
  constructor(name ="", english = 0, math = 0, japanese = 0, science = 0, social =0){
    // 親クラスのコンストラクタの呼び出し
    super(name, english, math, japanese);
    // プロパティの定義、及び初期データ格納
    this.science = science;
    this.social = social;
  }

  // ５教科の合計点を計算するメソッド
  calcTotalScore() {
    // ３教科の合計を親クラスのメソッドを使って計算
    let sum3 = this.calcSum();
    // 理科と社会の点を加算して合計を算出
    let total = sum3 + this.science + this.social;
    return total;
  }

  // ５教科の平均点を計算するメソッド
  calcTotalAve() {
    // calcTotalScore()の戻り値を5で割って平均点を算出
    let ave = this.calcTotalScore() / 5;
    return ave;
  }

  printScore() {
    // 親クラスのprintScore()メソッドの呼び出し
    super.printScore();
    // このクラス内のメソッドを使って合計と平均を取得
    let total = this.calcTotalScore();
    let ave = this.calcTotalAve();
    // 表示
    console.log(this.name + "さんの5教科合計: " + total + "平均: " + ave);
  }
}