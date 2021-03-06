/**
 * 分割代入
 */
// const myProfile = ["daiki", 28];

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレット構文
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// console.log(arr6)

// //結合
// const arr7  = [...arr4, ...arr5];
// console.log(arr7)

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "玉田"];
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4];
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "玉田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
/**
 * 参考演算子
 */
//ある条件　? true : false
// const num = 1300;
// console.log(num.toLocaleString());

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

//||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額は未設定です";
// console.log(fee);

//＆＆は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
