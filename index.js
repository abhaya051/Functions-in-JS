// ---------------------------Functions---------------------------------
// Function Is Block of Code that Perform a Specific Task,Can Be Invoked Whenever Needed

// 1st Method Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// Function Define Here
// function myFun() {
//   console.log("Hey World");
//   console.log("Hey World");
//   console.log("Hey World");
//   console.log("Hey World");
// }

// // Function Call
// myFun(); //If You Wanted To Log So Many times
// myFun();
// // myfunction();

// 2nd Method Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// function myFun(msg) {
//   //This Is Called Parameters
//   console.log(msg);
// }

// myFun("Hello Mohan"); // It Is Called A Arguments
// myFun("Hello Sohan");
// myFun("Hello Rohit");
// myFun("Hello Jai");
// myFun("Hello Sanjay");

// 3rd Method Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// Calculate The Sum
// function sum(x, y) {
//   console.log(x + y);
//   console.log(x * y);
//   console.log(x / y);
//   console.log(x - y);
// }
// sum(8, 6);
// In Above Eg I Do Various Arthmetic Operators Using Function

// Returns Function Is------------------------------------------------------>>>>>>>>>>>>>>>>>
// function sum(x, y) {
//   console.log("After Return");
//   let s = x + y;
//   return s;
//   //   console.log("Before Return"); //Note  never write anything below return keyword
// }

// let Val = sum(3, 4);
// console.log(Val);

// Note About Local Variables Scoped---------------------->>>>>>>>>>>>>>>>>>>>>>
// function sum(x, y) {
//   console.log("After Return");
//   let s = x + y;
//   console.log(x); // It Will Run Because It is In Blocked Scoped
//   return s;
// }

// let Val = sum(3, 4);
// console.log(Val);
// console.log(x);/// It Does Not Work Because It Is Out From The Scoped

// Arrow Function Start here------------------------------>>>>>>>>>
//  Making A Sum Function
// function sum(x, y) {
//   return x + y;
// }
// const arrowSum = (x, y) => {
//   console.log(x + y);
// };

// arrowSum(8, 9);

//  Making A Multiplication Function

// function Multiplication(x, y) {
//   return x * y;
// }
// let arrowMultiple = (x, y) => {
//   console.log(x * y);
// };

// arrowMultiple(5, 6);

// For-each Loop In array (Called Callback Function)

// let array = [1, 5, 48, 6, 99, 36];
// This Is Normal Syntax
// array.forEach(function printVal(val) {
//   console.log(val);
// });

// This Is Arrow Function (This Loops Is Only For Use In Arrays Not In String)
// let array = ["pune", "mumbai", "delhi", "goa"];
// array.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
// });

// Map Method In Array

// let arr = ["Pune", "Mumbai"];

// arr.map((val) => {
//   console.log(val);
// });

// Lets Create New Arrays Using Map Methods

// let arr = [52, 56, 98, 363, 556, 698];
// let newVal = arr.map((val) => {
//   return val;
// });
// console.log(newVal);
// ---------------------------------->>>>>>>>>>>>>>>>>
// let arr = [52, 56, 98, 363, 556, 698];
// let newVal = arr.map((val) => {
//   return val**val;
// });
// console.log(newVal);

// Filter Method In Array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = arr.filter((val) => {
//   return val % 2 !== 0;
// });

// console.log(evenArr);

// Reduce Method In Array
// let Arr = [1, 2, 3, 4, 5, 6];
// const output = Arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);

// Print Largest Number In Arrays

// let Arr = [1, 2, 3, 4, 5, 6];
// const output = Arr.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });
// console.log(output);

// Print Smallest Number In Arrays
// let Arr = [1, 2, 3, 4, 5, 6];
// const output = Arr.reduce((res, curr) => {
//   return res < curr ? res : curr;
// });
// console.log(output);
