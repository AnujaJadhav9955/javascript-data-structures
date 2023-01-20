// Merge two sorted arrays in ascending order and remove duplicate elements.

// const arr1 = [1, 2, 3, 3, 5];
//const arr2 = [2,3,4,5,6];
//sorted array should look like = [1, 2, 3,4,5,6]

const arr1 = [1, 2, 3, 3, 5];
const arr2 = [2,3,4,5,6];

const arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b)
const sortedArray = [...new Set(arr3)]
console.log(sortedArray);