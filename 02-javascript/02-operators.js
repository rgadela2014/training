
//02- Javascript Premitive Operators 

let x = 10;
let y = 3;

//x+y is arthimetic operator
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

//Increment and Decrement ++x and --x
console.log(++x);

// Assignment Operator
let a = 20;
a++
a = a + 5;
a += 5 //above one and this one are same. 

// Comparison Operator
console.log( x > 0); //this prints true
console.log( x >= 0);
console.log( x < 0);
console.log( x <= 0);

//Equality Operators
console.log(x === 1); // x equal to 1 or not
console.log(x !== 1); // x not equal to 1

//Strint Equality - both the sides on the operator same type & value
console.log( 1 === 1); //This is true
console.log( '1' === 1); // This will false, types don't match


//Lose Equality
console.log( 1 == 1);  // This is true
console.log( '1' == 1);  // This is true as well - no type check
console.log(true == 1); // This is true as well

//if customer has more than 100 then they are gold otherwise silver
//Ternary Operators
let points = 120;
let type = points > 100 ? 'gold' : 'silver'
console.log(type);

//Logical Operators
// &&
console.log( true && true);
console.log( true && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

// || OR Operator
eligibleForLoan = highIncome || goodCreditScore;

// Not 
let applicationRefused = !eligibleForLoan;

//falsy - undefined, null, 0, false, '', NAA
// Anything that's not falsy is Truthy
// let userColor = 'red';
// let defaultColor = 'blue'; 
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

let userColor = undefined; // undefined is falsy
let defaultColor = 'blue'; 
let currentColor = userColor || defaultColor;
console.log(currentColor);

//Operator Precedence - * has more precedence for 3*4 is first. 4
let abc  = 2 + 3 * 4;




















