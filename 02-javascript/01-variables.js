
// 01- Javascript Premitive Variables
// variables - Primitive and Reference Types
// let name;

let firstName = 'Ravi', lastName='Gadela';
 
console.log('Hello World');

console.log(firstName+lastName);

// constants
const interestRate = 0.3;
// this can't be done - interateRate=1;
console.log(interestRate); 

//Primitive Types
let name = 'Ravi'; // String
let age = 30; //Number
let isApproved = true; //Boolean
let firstName1 = undefined; 
let selectedColor = null;

//type of a varaible can be changed in javascrip
//typeof name
// In the browser console do the below
typeof name //string
typeof age //age
typeof firstName1 //undefined
typeof selectedColor //object

//All the above are Primitive Types
//Reference Types are
// 1) Object 2) Array 3) Function

// {} is object literal
let person = {
    name: 'Ravi',
    age: 30
} 

//shortcut for console log clg + Tab
console.log('object :>> ', person);
// Dot Notation person.name
// person.age
//Braket Notation - to access dynamically
let selectedName = 'name';
// person['name'] = 'Gauthami';
person[selectedName] = 'Gauthami'

//Arrays Literal
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 30;
// console.log(selectedColors[0]);
console.log(selectedColors);
console.log(selectedColors.length);

//Performing a Task Functions
function greet(name,lastName) {
    console.log('Hello' + name + '' + lastName);
}

greet('Ravi');
greet('Ravi','Gadela')

function square(number) {
    return number * number;
}

console.log(square(2));
// let squareof2 = square(2);\

















