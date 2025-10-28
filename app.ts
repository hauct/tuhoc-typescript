// const nameTS1 = "Eric";

// console.log("length = ", nameTS1.length);
// console.log("upPerCase = ", nameTS1.toUpperCase());

// let count: number = 2;
// console.log(`Số đã nhập là ${count}`);

// let mang = ["Hello", "It", "is", "an", "array"];
// mang.push("25");

// console.log(`Mảng là ${mang}`);

// let numberTest: number = 9.6;
// console.log(`Số là ${numberTest}`);

// let textTest = `
//     Đây là đoạn test "hello"
// `;

// console.log(`Text là ${textTest}`);

// let person: {
//   name: string;
//   age: number;
// } = {
//   name: "Hau",
//   age: 24,
// };

// console.log(`Tên là ${person}`);

// let myArray: (string | number)[] = ["hauct", "hau2", "hau3"];
// console.log("array string là", myArray);

//tuple: dataType/size/order
// let skills2: [string, number] = ["Hội Dân IT", 25];

// let skills3: [boolean, string, number];

// skills3 = [true, "Eric", 25];

// function promiseExp() {
//   return new Promise((resolve, reject) => {
//     reject("hello");
//   });
// }

// promiseExp()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("nigga what");
//   });

// enum API_STATUS {
//   PENDING = "PENDING",
//   FULFILLED = "FULFILLED",
//   REJECTED = "FULFILLED", //PROMISE
// }

// //constant
// //java

// let a1 = API_STATUS.PENDING;
// let a2 = API_STATUS.FULFILLED;

// console.log(">>> a1 = ", a1, " a2 = ", a2);

// let nameV2: any;

// nameV2 = "Eric";
// nameV2 = true;

// console.log(">>> nameV2 = ", nameV2);

// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// const handleLogs = (message: string): void => {
//   console.log(">>> message:", message);
// };

// console.log(handleLogs("name"));

// type ericType = number | string | object | boolean;

// function addNumberOrString(a: ericType, b: number | string) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }

//   if (typeof a === "string" && typeof b === "string") {
//     return a.concat(b);
//   }

//   throw new Error("Parameters must be numbers or strings");
// }

// console.log(">>> check: ", addNumberOrString(6, 9));

// console.log(">>> check: ", addNumberOrString("6", "9"));

// console.log(">>> check: ", addNumberOrString(true, "9"));

// let discount: number;
// let itemCount = 11;

// if (itemCount > 0 && itemCount <= 5) {
//   discount = 5; // 5% discount
// } else if (itemCount > 5 && itemCount <= 10) {
//   discount = 10; // 10% discount
// } else if (itemCount > 10 && itemCount <= 15) {
//   discount = 20;
// } else {
//   discount = 15; // 15%
// }

// console.log(discount);

// const age: number = 25;

// switch (age) {
//   case 25:
//   case 21:
//     // code block
//     console.log("Đã đi làm");
//     break;
//   case 20:
//     console.log("Đã đi làm sinh viên");
//     break;
//   default:
//     // code block
//     console.log(">>> run default");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(">> i=", i);
//   //i = 9 => 10
// }

//lesson 23
// let counter = 0;

// while (counter < 5) {
//   console.log("counter =", counter);
//   if (counter % 2 === 0) break;
//   counter++;
// }

//lesson 24
let counter2 = 0;
do {
  console.log("counter =", counter2);
  if (counter2 % 2 === 1) break;
  counter2++;
} while (counter2 < 5);
