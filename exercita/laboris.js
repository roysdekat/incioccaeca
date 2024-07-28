// Example wrapper class
class Wrapper {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

// Creating an instance of Wrapper
let wrappedObject = new Wrapper(42);

// Accessing the wrapped value
let directValue = wrappedObject.value;
console.log(directValue); // Outputs: 42

// Using a method to access the wrapped value
let methodValue = wrappedObject.getValue();
console.log(methodValue); // Outputs: 42
