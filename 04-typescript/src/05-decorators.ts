
//Class Decorators
//Under the hood decorator is just a javascript function that gets called.
//Compiler will pass the Class (for class decorator) to that js function
//to modify the class to add new method, attributes etc
//Angular comes with lot of out of the box Decorators

//Function Decorators

function Log(target: any,methodName: string, descriptor: PropertyDescriptor) : void {
    descriptor.value = function() {
        const original = descriptor.value as Function
        console.log('Before')
        original.call(this, 'Blue Sky')
        console.log('After')
    }
}

// class Person {
    
//     @Log
//     say(message: string) {
//         console.log('person says:' + message);
//     }
    
// }

//Property Decorators
