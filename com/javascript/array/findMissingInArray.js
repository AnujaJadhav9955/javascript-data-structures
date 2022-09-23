function findMissingInArray(arr, n) {
let sum = 0;
for (let i=0;i<arr.length; i++) {
    sum = sum + arr[i];
}
const sumN = n*(n+1)/2; // sum of n number from 1-n => n*(n+1)/2
return sumN-sum;
}

const arr = [3, 2, 1, 5]
const missingElement = findMissingInArray(arr, 5);
console.log('missingElement', missingElement);