// 1.Ways to print in javascript
//console.log("Hello World");
//alert("good job !!!");
//document.write("this is a document write...")

// 2.Javascript console API
// console.log("Hello World", 100 + 1, "JavaScript learning");
// console.warn("this is warning");
// console.error("This is an error!!")

// 3. Javascript Variables
// What are variables? - Container to store data values 
var number1 = 54;
var number2 = 67;
//console.log(number1 + number2);

// 4. Datatypes in JavaScript
// Numbers 
var num1 = 432;
var num2 = 124;

// Strings
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    naman: 99.99,
    abhiram: 87,
    tushant: 93
}
//console.log(marks);

// Boolians
var a = true;
var b = false;
//console.log(a,b);

// var und = undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

/*
At a high level there are two types of data types in javascript 
1. Primitive data types: undefined, null, number, string, booliean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bag", 3, "blue", 4, "naman", 5, 6, 7];
//console.log(arr);

// Operators in javascript
//Arithmatic operators
var a1 = 23;
var b1 = 45;
console.log("The value of a1 + b1 is :", a1 + b1);
console.log("The value of a1 - b1 is :", a1 - b1);
console.log("The value of a1 * b1 is :", a1 * b1);
console.log("The value of a1 / b1 is :", a1 / b1);

//Assignment operaotors
var c = b1;
// c += 4;
// c -= 4;
// c *= 4;
// c /= 5;

console.log("The value of c is :", c);

//Comparision Operators
// var x = 12;
// var y = 10;
// console.log(x!=y);
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

// Logical Operators

// Logical and
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);
// console.log(false && true);

// Logic or 
// console.log(true || false);
// console.log(true || true);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!true);
// console.log(!false);

// Functions in javascript
function avg(a, b) {
    return (a + b) / 2;
}
// DRY = Do not repeat yourself
c1 = avg(15, 35);
c2 = avg(24, 16);
// console.log(c1);
// console.log(c2);

// Conditionals in javascript

var age = 19;
if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are not an adult(Hi!!! Kid)");
}

/*
//If-else ladder
if(age >16)
{
    console.log("You are a teenager");
}
else if(age >12)
{
    console.log("You are still a teenager");
}
else if(age =12)
{
    console.log("You are soon to be teenager");
}
else
{
    console.log("You are a kid")
}
console.log("End")
*/

// Loops in javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// for(var i = 0; i<arr.length;i++) // for loop
// {
//     console.log(arr[i]);
// }

// for each loops
// arr.forEach(function(element)
// {
//     console.log(element);
// })

// const ac = 0;
// ac++;
let j = 0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}


