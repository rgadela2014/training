//03- Javascript Control Flow Statements

//If Statement

let hour = 10;

if(hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}

// Switch
let role = 'guest';

switch(role) {
    case 'guest': 
        console.log('guest user');
        break;
    case 'moderator':
        console.log('Moderator');
        break;
    case 'admin': 
        console.log('Admin');
        break;
    default: 
        console.log('Unknown Role');
}

//For - display only for odd numbers.
for(let i = 0; i < 5; i++ ) {
    if (i % 2 !== 0) console.log('Hello World' + i);
}

//While
// let i = 0;
// while(i < 5) {
//  if (i % 2 !== 0) console.log('Hello World' + i);
//  i++;
// }

//Do While - executed at least once - rare. 
let i = 0;
do {
 if (i % 2 !== 0) console.log('Hello World' + i);
 i++;
} while(i < 5) 

//For - in Loop - used to iterate over objects. 
const person2 = {
    name: 'Ravi',
    age: 30
}

for(let key in person2) {
    console.log(key , person2[key]);
}

const colors = ['red', 'green', 'blue']
for(let index in colors) {
    console.log(index , colors[index]);
}

//For - of loop - used to iterate over arrays
for(let color of colors) {
    console.log(color);
}

//Break - print only odd numbers 
// Break breaks the loop and continue jumps to next iteration
let one = 0;
while (one <= 10) {
    if(one % 2 === 0) {
        one++;
        continue;
    }
    console.log(one);
    one++ 
}

//Falsy Values
// undefined
// null
// ''
// false
// 0
// NaN




