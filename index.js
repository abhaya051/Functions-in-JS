// // ---------------------------Functions---------------------------------
// // Function Is Block of Code that Perform a Specific Task,Can Be Invoked Whenever Needed

// // 1st Method Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// // Function Define Here
// // function newFun() {
// //   console.log("Hey Joe");
// //   console.log("Hey Udit");
// //   console.log("Hey Mohit");
// //   console.log("Hey Manny");
// // }

// // // Function Call
// // newFun();
// // //If You Wanted To Log So Many times
// // newFun();
// // myfunction();

// // 2nd Method Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// // function mySum(a, b) {
// //   console.log(a + b);
// // }
// // mySum(2, 8); // It Is An Arrgument
// // // function myFun(msg) {
// // //   //This Is Called Parameters
// // //   console.log(msg);
// // // }
// -----------------------------------------------------------------.>>>>>>>>>>>>>>>>>
// // function myFun(chat) {
// //   console.log(chat);
// // }
// // myFun("Hello Are You Fine");

// // 3rd Method Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// // Calculate The Sum
// function sum(x, y) {
//   console.log(x + y);
//   console.log(x * y);
//   console.log(x / y);
//   console.log(x - y);
// }
// sum(8, 6);
// // In Above Eg I Do Various Arthmetic Operators Using Function

// // Returns Function Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// function funNum(x, y) {
//   Num = x * y;
//   return Num;
// }
// let mul = funNum(5, 2);
// console.log(mul);

// ------------------
// // Note About Local Variables Scoped---------------------->>>>>>>>>>>>>>>>>>>>>>
// // function sum(x, y) {
// //   console.log("After Return");
// //   let s = x + y;
// //   console.log(x); // It Will Run Because It is In Blocked Scoped
// //   return s;
// // }

// // let Val = sum(3, 4);
// // console.log(Val);
// // console.log(x);/// It Does Not Work Because It Is Out From The Scoped

// // Arrow Function Start here------------------------------>>>>>>>>>

// // For-each Loop In array (Called Callback Function)

// let array = [1, 5, 48, 6, 99, 36];
// // This Is Normal Syntax
// // array.forEach(function Pval(val) {
// //   console.log(val);
// // });
// //This Is Arrow Function
// array.forEach((Val) => {
//   console.log(Val);
// });

// // This Is Arrow Function (This Loops Is Only For Use In Arrays Not In String)
// let arr = ["Litchi", "Mango", "Apple", "Grapes", "Banana"];
// arr.forEach((val, idx, arr) => {
//   console.log(val, idx, arr);
// });

// -------------------------------------------->>>>>>>>>
// // Map Method In Array
// let arr = [52, 56, 98, 363, 556, 698];
// arr.map((val) => {
//   console.log(val);
// });

// // Lets Create New Arrays Using Map Methods
// let arr = [52, 56, 98, 363, 556, 698];
// arr.map((val) => {
//   return val;
// });
// console.log(arr);

// // // ---------------------------------->>>>>>>>>>>>>>>>>
// let arr = [52, 56, 98, 363, 556, 698];
// let newVal = arr.map((val) => {
//   return val**val;
// });
// console.log(newVal);

// // Filter Method In Array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = arr.filter((val) => {
//   return val > 2;
// });
// console.log(even);

// // Reduce Method In Array
// let Arr = [1, 2, 4, 7, 9];
// let out = Arr.reduce((val, curr) => {
//   return val + curr;
// });
// console.log(out);
// // Print Largest Number In Arrays
// let Arr = [1, 2, 3, 4, 5, 6];
// const output = Arr.reduce((val, curr) => {
//   return val > curr ? res : curr;
// });
// console.log(output);

// // Print Smallest Number In Arrays
// // let Arr = [1, 2, 3, 4, 5, 6];
// // const output = Arr.reduce((res, curr) => {
// //   return res < curr ? res : curr;
// // });
// // console.log(output);

// 1st Method To Write A Call Back  Function
// let arr = [1, 2, 3, 4];
// arr.forEach((val) => {
//   console.log(val * val);
// });

// 2nd Method To Write A Call Back  Function
// let arr = [1, 2, 3, 4];
// let num = (val) => {
//   console.log(val * val);
// };

// arr.forEach(num);

// Putt The Number Which Is Greater Than 90
// let arr = [85, 96, 87, 95, 90];
// let a = arr.filter((val) => {
//   return val > 90;
// });
// console.log(a);
