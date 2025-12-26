
// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;

//you can do this as well - when you initialize, it fixes the type.
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level: any;

// sales = 'a' - This will not be allowed in TypeScript
// level can have any type but avoid

let numbers: number[] = [1,2,3]
// let numbers: [1,2,3] - if you initialize, it's ok

//Tuples
let user: [number,string] = [1,'Ravi']

//Enums - Pascal - First Letter Uppercase
const enum Size {Small,Medium,Large}
let mysize: Size = Size.Large;
console.log(mysize);

//Functions with a default value for second parameter, pass 2nd is optional here
function calculateTax(income: number, taxYear:number = 2022) : number {
    if(taxYear > 2022) {
        return income * 1.2
    }
    return income * 1.3
}

//Objects
let employee: { 
    readonly id: number,
    name?: string,
    retire: (date:Date) => void
} = {
    id: 1,
    name: 'Ravi Gadela',
    retire: (date:Date) => {
        console.log(date);
    }
}

employee.name = 'Ravi Gadela'
// employee.id = 12 - This is not allowed bcoz id is readonly




