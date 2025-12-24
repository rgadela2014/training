//05-Javascript - Arrays

// Adding Elements

const numbers = [3,4]

//Add elements at end, begin, middle

//Add at the end
numbers.push(5, 6)

//Add at the beginning
numbers.unshift(1,2)

//Add from position 2, delete 0 items, add 2 items
numbers.splice(2,0,'2a','2b')

console.log(numbers);

//Find Elements
console.log(numbers.indexOf(2))

//Returns true if the element is there in the array.
console.log(numbers.includes(1));

//search for 1, starting from index 2
numbers.indexOf(1,2)

//Find Reference Types
const cources = [
    { id: 1, name: 'Ravi'},
    { id: 2, name: 'Siddharth'},
    { id: 3, name: 'Gauthami'},
];

const course = cources.find(function(cource) {
    return cource.name === 'Ravi'
});

console.log(course);

const course2 = cources.findIndex(function(cource) {
    return cource.name === 'Gauthami'
});

console.log(course2);

//Arrow Function to do the same a above
//It iterates through all the entries and applies the same function
//Read this as cource goes to block of code i.e cource.name === 
//read from left to right - find a cource with name = Ravi
const course3 = cources.find((cource) => cource.name === 'Ravi');

//Removing Elements
const numbers2 = [1,2,3,4];

//Remove an element from End
const last = numbers2.pop();
console.log(numbers2);
console.log(last);

//Remove and element from the Beginning
const first = numbers2.shift();
console.log(numbers2);
console.log(first);

//Starting from position 2, Remove 2 elements
const numbers3 = [1,2,3,4];
numbers3.splice(2,2);
console.log(numbers3);

//Empty an array
let numbers4 = [1,2,3,4]
let another = numbers4

numbers4 = []
console.log(numbers4);
console.log(another);

//Splice all the elements - same as empty array
let numbers5 = [1,2,3,4,5]
numbers5.splice(0,numbers5.length)
console.log(numbers5);

const firstArray = [1,2,3]
const secondArray = [4,5,6]

// const combined = firstArray.concat(secondArray)
const combined = [...firstArray,...secondArray]
console.log(combined)

//start from 2 and get till 4th element
const slice = combined.slice(2,4)
console.log(slice)

//gets all elements from second position
const slice2 = combined.slice(2);
console.log(slice2)

//gets a copy of an array
const slice3 = combined.slice();
console.log(slice3)

const testArray = [1,2,3,4];

//iterate over testArray of primitive
for(let number of testArray) 
    console.log(number);

//forEach to iterate over the array
testArray.forEach(number => console.log(number))

//forEach to iterate over the array
testArray.forEach((number,index) => console.log(index,number))

//Join operation
const numbers6 = [1,2,3]
const joined = numbers6.join(',')
console.log(joined);

const message = 'This is my first message'
const parts = message.split(' ')
console.log(parts);

const combined2 = parts.join('-');
console.log(combined2);

//sorting an array
const courseToSort = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'React.js'},
    {id: 3, name: 'Angular.js'}
]

courseToSort.sort( function(a,b) {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
})

console.log(courseToSort)

//every method on arrays
const numbers7 = [1,2,-1,3,4]

//every predicate function is executed on each entry and true if all +ve
const allPositive = numbers7.every(function(value) {
    return value >= 0
})

console.log(allPositive);

//some will return true if atlease one is true
const atleaseOnePositive = numbers7.some(function(value) {
    return value >= 0
})

console.log(atleaseOnePositive);

//Filtering an array
const numbersAgain = [1,-1,2,3]

const filtered = numbersAgain.filter(function(value) {
    return value >= 0;
})

const filtered2 = numbersAgain.filter((value) => value >= 0); 

console.log(filtered);
console.log(filtered2);

//Map method in Array - Map each item to something else
const items2 = filtered2.map(n => '<li>' + n + '</li>')
console.log(items2)

const html = '<ul>' +  items2.join('') + '</ul>'
console.log(html);

//converted numbers array to objects array with value
const items4 = filtered.map(n => ({value: n}))

console.log(items4);

//Chaining of operators
const numbersChain = [1,-1,2,3]

const final = numbersAgain
                        .filter(n => n >= 0)
                        .map(n => ({value: n}))

console.log(final);

//Reducing an array
const prices = [1,2,3]

let sum = 0;
for (let n of prices) sum = sum + n;

console.log(sum);

//reduce has 2 parameters function for accumulator, initialvalue for accumulator
// a=0, c=1, a= a+c, a=1
// a=1, c=2, a = a+c, a = 3
// a=3, c=3, a = a + c, a = 6
let sum2 = prices.reduce((accumulator,currentValue) => {
   return accumulator += currentValue
},0)

//if the second parameter is not given, it starts with first as accumulator
let sum3 = prices.reduce((accumulator,currentValue) => {
   return accumulator += currentValue
})

//shorter versio no above
let sum4 = prices.reduce(
    (accumulator,currentValue) => accumulator += currentValue)

console.log(sum4);

//Exercise -1 Array From Range
const numbers10 = arrayFromRange(1,10)
console.log(numbers10)

function arrayFromRange(min,max) {
    const output = [];
    for(let x = min; x <= max; x++) {
        output.push(x); 
    }
    return output;
}

// Exercise-2 Reimpliment the includes operator
const numbers11 = [1,2,3,4]
console.log(includes(numbers11,1))

function includes(array, searchElement) {
    for(let element of array) {
        if(element === searchElement) 
            return true;  
    }
    return false;
}

//Exercise-3 - Return an array with elments except in given input array
const numbers12 = [1,2,3,4]

const output12 = except(numbers12,[1])
console.log(output12);

function except(array, excluded) {
    const output = []
    
    for(let element of array) 
        if(!excluded.includes(element))
            output.push(element)

    return output;
}

//Exercise 4 - countOccurances of a number
const numbers13 = [1,2,3,4]

const count = countOccurances2(numbers13, 1) 
console.log(count);

function countOccurances(numbersArray,searchElement) {
    let occurances = 0;
    for(let element of numbersArray) {
        if(element === searchElement)
            occurances++;
    }
    return occurances
}

const numbers14 = [1,2,3,4]

const count14 = countOccurances2(numbers14, 1) 

function countOccurances2(numbers14,searchElement) {
   return numbers14.reduce((accumulator,current) => {
    const occurance = (current === searchElement)
    console.log(accumulator,current,searchElement,occurance); 
    return accumulator + occurance       
    }, 0);
}

//Execise - getMax
const numbers15 = [1,2,3,4]

const count15 = getMax(numbers15)
console.log(count15);

function getMax(numbers15) {
    if(numbers15.length === 0) return undefined
    
    // let max = numbers15[0];
    // for(let i=1; i<numbers15.length; i++ ) {
    //     if(numbers15[i] > max) max = numbers15[i];
    // }

    // return numbers15.reduce( (accumulator,current) => {
    //     if(current > accumulator) return current
    //     return accumulator
    // })

    return numbers15.reduce( (accumulator,current) => current > accumulator ? current : accumulator)

}

//Exercise 5 - Movies
const movies = [
    {title: 'a', year: 2025, rating: 4.5},
    {title: 'b', year: 2025, rating: 4.7},
    {title: 'c', year: 2025, rating: 3},
    {title: 'd', year: 2024, rating: 4.5},
]

//Get all the movies in 2025 with rating > 4
//Sort them by Descending Order of rating
//Pick Title Property to display on console - here b & a

const titles = movies
    .filter(m => m.year === 2025 && m.rating >= 4)
    .sort( (a,b) => a.rating - b.rating )
    .reverse()
    .map(m => m.title)

console.log(titles);














