//Object Oriented - Typescript 

//classes & objects 

class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id,
        this.owner = owner,
        this._balance = balance
    }

    deposit(amount: number): void {
        if(amount <= 0 ) 
            throw('Invalid amount')
        this._balance += amount;
    }

    get balance():number {
       return this._balance 
    }
}

let account =  new Account(1,'Ravi',0)
account.deposit(100);
// console.log(account.balance);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);
 
//public private protected
//Just the constructor is enough - this is simpler way in TS
class Account2 {
    nickname?: string;
    
    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    deposit(amount: number): void {
        if(amount <= 0 ) 
            throw('Invalid amount')
        this._balance += amount
    }

    get balance():number {
       return this._balance 
    }

    set balance(value: number) {
        if(value < 0) 
            throw new Error('Invalid value')
        this._balance = value
    }
}

//Index Signatures
class SeatAssignment {
    // A1, A2...
    // Ravi, Gauthami, Siddharth
    // Index Signature Property
    [seatNumber: string]:string
}

let seats = new SeatAssignment();
seats.A1 = 'Ravi'
seats.A2 = 'Gauthami'

//Static Members - A static property will have only memory referance
class Ride {
    private static _activeRides: number = 0;

    start() { Ride._activeRides++ }
    stop() { Ride._activeRides-- }

    static get activeRides():number {
        return Ride._activeRides
    }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(Ride.activeRides);
console.log(Ride.activeRides);

//Inheritance
class Person {
    constructor(
        public firstName:string,
        public lastName:string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
    
    walk( ) {
        console.log('Walking');
    }

    talk() {
        console.log('Talking');
    }
}

class Student extends Person {
    constructor(
        public studentid:string,
        firstName:string,
        lastName:string) {
        super(firstName,lastName)
    }

    takeTest() {
        console.log('Student Taking Test');
    }
}

let student = new Student('1','Ravi','Gadela')

student.takeTest();
student.talk();
student.walk();

//Method Overriding

class Teacher extends Person {

    override get fullName() {
        return 'Professor' + super.fullName
    }
}

let teacher = new Teacher('Ravi', 'Gadela')
console.log(teacher.fullName);

//Polymorphism - both Student or Teach is a Person

printNames([
    new Student('1','Ravi','Gadela'),
    new Teacher('Gauthami','Gadela')
])

function printNames(people: Person[]) {
    for(let person of people) 
        console.log(person.fullName);
}

//The render method can't do anything but every shape needs render
//Another class has to extend this and provide implementation
//Abstract methods can exist only in Abstract Class
abstract class Shape {
    constructor(public color:string) {}

   abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color:string ) {
        super(color);
    }

    override render(): void {
        console.log('Rendering a Circle');
    }
}

//Interfaces
interface Calendar {
    name:string;
    addEvent():void
    removeEvent():void
}

interface CloudCalendar extends Calendar {
    sync():void
}

//Select GoogleCalendar and press Ctrl . to autofill the class
class GoogleCalendar implements Calendar {
    constructor(public name:string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}











