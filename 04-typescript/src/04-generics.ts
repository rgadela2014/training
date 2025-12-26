
//Generic Classes
class KeyValuePair<T,K> {
    constructor(public key: T, public value:K) {}
}

let pair = new KeyValuePair<number,string>(1,'Apple')

let pair2 = new KeyValuePair<string,string>('1','Apple')

//compiler can infer the types and the below is shorthand
let pair3 = new KeyValuePair(1,'mango'); 

//Generic Function
function wrapInArray<T>(value:T) {
    return [value]
}

//Same function will return numbers array or strings array or any array
let numbers = wrapInArray(1)
let strings = wrapInArray('banana')

//Generic Interfaces
// Here T could be a Person, User, Price, Product etc
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string) : Result<T> {
    return {data: null, error: null}
}

interface User {
    username: string;
}

interface Product {
    title:string
}

let result = fetch<User>('url') 
result.data?.username

let result2 = fetch<Product>('url') 
result2.data?.title

//Generic Constraints - T can be only number or string below
function echo<T extends number | string >(value: T) : T {
    return value
}

echo('l')
echo(1)
// echo(boolean)

//Generic Constraints
class Person {
    constructor(public name:string) {}
}

class Customer extends Person {
}

//Any class that extends Person is allowed here
function echo2<T extends Person>(value: T) : T {
    return value
}

//both are allowed here. This method is contraind to Person Generic
echo2(new Person('a'))
echo2(new Customer('b'))

//Extend Generic Classes

interface Product {
    name: String;
    price: number
}

class Store<T> {
    protected _objects: T[] = [];
    
    add(obj: T) : void {
        this._objects.push(obj)
    }
    
}

//1. Extend the Generic Type as-is
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<Product>()
store.compress();

//2. Restricting the Generic Type Parameter to {name:string}
class SearchableStore<T extends {name:string}> extends Store<T> {
    find(name:string) : T | undefined {
        return this._objects.find(obj => obj.name === name)
    }
}

//3. Fix or Terminate the Generic
class ProductStore extends Store<Product> {
    filterByCategory(category: string) : Product[] {
        return [];
    } 
}

//TypeMapping

interface Product2 {
    name: string;
    price: number;
}

//This is type alias of Product2 - all props same but readonly
type ReadOnlyProduct = {
    readonly [K in keyof Product] : Product[K]
}
