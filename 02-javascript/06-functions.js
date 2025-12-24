
// 06-Javascript Functions 
//Function Declaration
function walk() {
    console.log('walk');
}

walk()

//Function Expression - just like setting a value or object to a variable
//you can also set a function to the variable.
//Anonymous Function Expression
let run = function() {
    console.log('run');
}
//to run the fuction associated with the name.
run();
let move = run
//now move bind to the same function and same fn gets executed
move();

// Any number of parameters can be passed and it's captured in arguements
// function sum() {
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1,2,3,4,5));

//It's not spread, it's Rest operator
function sum(...args) {
    console.log(args);
    return args.reduce((a,b) => a + b )
}

console.log(sum(1,2,3,4,5,10));

//Rest parameter has to be last parameter only
function sum2(discount, ...prices) {
    const total = prices.reduce( (a,b) => a +b )
    return total* (1-discount);
} 

console.log(sum2(0.1,20,30));

//Functions can have default values as well,so it's optional to pass 2nd and 3rd
function interest(principal,rate=3.5,years=5) {
    return principal * rate / 100*years;
}

console.log(interest(10000));

const person = {
    firstName: 'Ravi',
    lastName: 'Gadela',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        // if(typeof value !== 'string') return;
        if(typeof value !== 'string')
            throw new Error('value is not string');
        
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
};

try {
    person.fullName = 'Gauthami Gadela';
    // person.fullName = true
}
catch(e) {
    console.log(e);
}

//console.log(person.fullName());
console.log(person.fullName);
console.log(person);

//var was used before ES6 (ES2015) - from ES6 onwards use let, const











