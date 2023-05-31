// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
//   for (let aa in person) {
//     console.log(aa + ": " + person[aa]);
// }

// const fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//   console.log(number);
// });

// Fibonacci series
// const fibo = (n) => {
//     let a = [0,1];
//     while (a[a.length-1] + a[a.length-2] <= n) {
//         a.push(a[a.length-1] + a[a.length-2]);
//     }
//     return a;
// }
// console.log(fibo(12));


// Factorial
// const fact = (n) => {
//     let fact = 1
//     for (let i=1;i<=n;i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(fact(4));


// Reverse String
// const str = "Hello, World!";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }
// console.log(reversedStr);  // Output: "!dlroW ,olleH"


const n = 5;

for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
