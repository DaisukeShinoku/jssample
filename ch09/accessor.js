class AccessorProp {
  // コンストラクタ、氏名を受け取りプロパティに格納
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // nameプロパティのゲッタ
  get name() {
    return this.lastName + this.firstName;
  }

  // extNameプロパティのセッタ
  set extName(value) {
    this.lastName = value;
    this.firstName = value;
  }
}

// 中田太郎という氏名でAccessorPropオブジェクトを生成
let taro = new AccessorProp("中田", "太郎");

// 各プロパティを表示
console.log("lastName: " + taro.lastName);
console.log("firstName: " + taro.firstName);
// nameプロパティを表示
console.log("name: " + taro.name);

// extNameプロパティに「山口次郎」を代入
taro.extName = "山口次郎";
// 表示はどうなるか？？
console.log("lastName: " + taro.lastName);
console.log("firstName: " + taro.firstName);

// 追加
console.log("extName: " + taro.extName);

// 追加②
taro.name = "篠原三郎";
console.log("name: " + taro.name);
