//Advaced Types

//Type Aliases 

type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Ravi Gadela',
    retire: (date:Date) => {
        console.log(date);
    }
}

//Union Types |
function kgTolbs(weight: number | string): number {
    if(typeof weight === 'number') 
        return weight*2.2
    else 
        return parseInt(weight)*2.2
}

kgTolbs(10)
kgTolbs('10kg')

//Intersection Types &
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types - Limit the value of variables
//Here quantity can be only 50 or 100
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

//Nullable Types
function greet(name: string | null) : void {
    if(name)
        console.log(name.toUpperCase);
    else 
        console.log('Hola');
}

greet(null)

//Optional Chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number) : Customer | null {
    return id == 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0); 

//Optional property access operator - use customer only if not null
// if(customer !== null) -- this is not required
console.log(customer?.birthday?.getFullYear);
//above is executed only if customer is not null and birthday is not null

//Optional element access operator
//  customers?.[0]

//Optional Call Operator
let log: any = null
log?.('a')

//HTMLElement, HTMLInputElement here bcoz we know it is input. 
//Type Assertions - as HTMLInputElement is type assertion 
// let phone = document.getElementById('phone') as HTMLInputElement;
//you can now use methods on HTMLInputElement
//Below version of Type Assertion is better. 
let phone = <HTMLInputElement>document.getElementById('phone')
let phoneNumber = phone.value

//unknown type
function render(document: unknown) {
    if(typeof document === 'string') {
        document.toUpperCase();
    }
}




