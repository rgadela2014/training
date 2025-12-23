console.log('Objects');

//object oriented programming
// let circle = {
//     redius: 1,
//     location : {
//         x: 1,
//         y: 2
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw circle');
//     }
// };

// circle.draw(); //draw method in circle object

//Factory Functions - return the instances.
//In modern javascript if the key and value are same then just need key
function createCircle(radius) {
return {
    radius,
    draw() {
        console.log('draw circle');
    }
};

}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);

//Constructor Function
function Circle(radius) {
    this.redius = radius;
    this.draw = function() {
       console.log('Draw Method'); 
    }
}

const circle = new Circle(1);

//dynamic nature of objects. it's const bcoz properties can change but not reference
const dynamicCircle = {
    radius: 1
}

dynamicCircle.color = 'yellow'
dynamicCircle.draw = function() {
    console.log('Draw Dynamic Circle');
}
console.log(dynamicCircle);

delete dynamicCircle.color;

console.log(dynamicCircle);

//In javascript Functions are Objects
// Premitives are copied by value and Objects are copied by Reference
// Objects, Functions, Arrays are all Objects and they are pass by Ref
// String, Boolean, Number etc are all Premitives and they are pass by value

let x = { value: 10}
let y = x;
x.value = 20;
console.log(x);
//y is carrying refrence of x here - so both will print 20.
console.log(y);

const anotherCircle = {
    radius: 2,
    draw() {
        console.log("Draw Another Circle");
    }
}

//iterate over the keys of an object anotherCircle
for(let key in anotherCircle) {
    console.log(key, anotherCircle[key])
}

//To iterate over array you use key of array
for(let key of Object.keys(anotherCircle)) {
    console.log(key);
}

//print all the entries of any Object. Functions are Arrays are Objects
for(let entry of Object.entries(anotherCircle)) {
    console.log(entry);
}

//To check if a property exists in an Object
if('radius' in anotherCircle) {
    console.log("yes it's a property in anotherCircle");
}
else {
    console.log('no it is not a property');
}

//Cloning an Object - old way
const circletwo = {};
for(let key in anotherCircle)
    circletwo[key] = anotherCircle[key]
console.log(circletwo);

//spread operator is widely used to clone the JS object
const circleThree = {...circletwo}
console.log(circleThree);

//Build in Objects - Math object for Math Calculations
Math.round(1.9)

//String Object for String calculations
const message = 'This is first message'
const anotherString = new String('hello ravi')

console.log(message.split(' '));

// Object literals - {}
// Bolean literals - true, false
// String literals - '' or ""
// Template literals - ` - back tick key next to number 1 in keyboard

//when you use back tick you don't need to use any escape charecters
const msgone = `This is my
'first' message`; 
console.log(msgone);

const name = 'ravi'
const emailmessage = `
Hello ${name} ${2+3},
Thanks for joining the mailing list
Regards,
Gadela
`
console.log(emailmessage);

const now = new Date();
//year, month index (4 is may), 11th day, 9am
const date1 = new Date(2025,4,11,9)
console.log(date1.toDateString);

const address = {
    street: '123a',
    city: 'Rouse Hill',
    zipcode: 2155
}

function showAddress(address) {
    for(key in address) console.log(key,address[key]);
}

showAddress(address);

//Factory Function 
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    }
}

let address1 = createAddress('a','b','c');
console.log(address1);

//Contructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address2 = new Address('a','b','c');
let address3 = new Address('a','b','c');

//check all the properties
function areEqual(address2, address3) {
return address2.zipcode === address3.zipcode &&
address2.city === address3.city &&
address2.street === address3.street
}

//strict equality - reference is same
function areSame(address2, address3) {
    return address2 === address3;
}

console.log(areEqual(address2,address3));
console.log(areSame(address2,address3));

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author:'a',body:'b'},
        {author:'c',body:'d'},
    ],
    isLive: true
}

console.log(post);



