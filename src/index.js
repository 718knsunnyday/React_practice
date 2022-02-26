// const,let

// 変数宣言
// var val1 = "Hello";
// console.log(val1);

// 上書き可能
// val1 = "Good Mornig";
// console.log(val1);

// 再宣言可能
// var val1 = "Good Evening";
// console.log(val1);

// const val3 = "こんばんは";
// console.log(val3);

// // const変数は上書き不可
// val3 = "おはよう";

// 再宣言不可能
// const val3 = "こんにちは";

// const val4 = {
//   name: "Tom",
//   age: 25,
// };
// val4.name = "Kim";
// console.log(val4);

// // constで定義したオブジェクトはプロパティの変更が可能
// const hoge = {
//   name : "春",
//   tem : "20度",
// };
// hoge.name = "夏";
// hoge.city = "Osaka";
// console.log(hoge);

// const hoge1 = {
//   city: "Tokyo",
// };
// hoge1.city = "Osaka";
// console.log(hoge1);

// 配列
// // constで定義した配列はプロパティの変更が可能
// const val5  = ['dog', 'cat'];
// val5[0] = 'tiger';
// val5.push('mouse');
// console.log(val5);

// const hoge2 = ['math', 'sience', 'korean'];
// hoge2.push('japanese');
// hoge2[2] = 'english';
// console.log(hoge2);

// const hoge3 = ['Osaka', 'Kyoto'];
// hoge3[1] = "Nara";
// hoge3.push('Shiga');
// console.log(hoge3);

// // テンプレート文字列
// const name = "Tom";
// const age = 25;
// // 「私の名前はTomです。年齢は25歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数

// 従来の関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("Hello"));

function func2(int) {
  return int;
}
console.log(func2(25));

// アロー関数
const func3 = (str) => str;
console.log(func3("Good"));

const func4 = (int) => {
  return int;
};
console.log(func4(100));

const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(20, 30));

const func6 = (num1, num2) => {
  return num1 * num2;
};
console.log(func6(100, 20));

// 分割代入
const myProfile = {
  name: "Tom",
  age: 25
};

const { name, age } = myProfile;
const message3 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message3);

const city = {
  prefecture: "Osaka",
  food: "たこ焼き"
};
const { prefecture, food } = city;
const a = `${prefecture}は、${food}が名産です。`;
console.log(a);

const lang = {
  lang1: "Japanese",
  lang2: "Korean"
};
const { lang1, lang2 } = lang;
const b = `${lang1}と${lang2}のどちらが好きですか。`;
console.log(b);
