const person = {
    name: "John",
    age: 30,
    city: "New York"
};
  for (let aa in person) {
    console.log(aa + ": " + person[aa]);
}

const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});

// Fibonacci series
const fibo = (n) => {
    let a = [0,1];
    while (a[a.length-1] + a[a.length-2] <= n) {
        a.push(a[a.length-1] + a[a.length-2]);
    }
    return a;
}
console.log(fibo(12));


Factorial
const fact = (n) => {
    let fact = 1
    for (let i=1;i<=n;i++) {
        fact *= i;
    }
    return fact;
}
console.log(fact(4));


// Reverse String
const str = "Hello, World!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);  // Output: "!dlroW ,olleH"

// Triangle
const n = 5;
for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}


for ( var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

console.log(0 == true);    // true
console.log(1 == true);    // true
console.log(2 == true);    // false
console.log(0 == false);   // true
console.log(1 == false);   // false
console.log("1" == true);  // true
console.log("0" == false); // true


console.log(1 + "1");      // "11"
console.log(2 - "1");      // 0
console.log("5" - 3);      // 2
console.log("5" + 3);      // "53"

console.log(x);   // undefined
var x = 10;

console.log(x);   // ReferenceError: Cannot access 'x' before initialization
let x = 10;

console.log(0.1 + 0.2 === 0.3);  // false

var obj = {name:'DEV',address:'THANE'};
console.log(obj.property);

const data = (value,callback) => {
    setTimeout(() =>{
        num = value + 1;
        callback(num);
    })
}
data(23,(fnc)=>{
    console.log(fnc)
})
