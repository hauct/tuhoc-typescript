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

function promiseExp() {
  return new Promise((resolve, reject) => {
    reject("hello");
  });
}

promiseExp()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("nigga what");
  });
