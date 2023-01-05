//Arrat destructuring is basically extracting elements from an array assigning them to variables

const arr = [1,2 ,3,4,5,6,7];

const [arr1, arr2, ...arr3] = arr;
console.log(arr1, arr2, arr3);

//Output will be => 1 2 [3,4,5,6,7]

//Swapping 2 elements without using third variable

let num1 = 100;
let num2 = 200;

[num1, num2] = [num2, num1];

console.log(num1, num2);

//num1 => 200 num2 => 100