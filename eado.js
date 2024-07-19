function insertAtPosition(array, value, position) {
    array.splice(position, 0, value);
    return array;
}

// Example usage:
let arr = [1, 2, 3, 4];
let value = 99;
let position = 2;

let result = insertAtPosition(arr, value, position);
console.log(result); // Output: [1, 2, 99, 3, 4]
