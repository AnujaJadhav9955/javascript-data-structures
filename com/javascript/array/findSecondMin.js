function findSecondMin(nums) {
let min=nums[0];
let nextMin=nums[0];

for (let i=1; i<nums.length; i++) {
    if(nums[i]<min) {
        nextMin=min;
        min=nums[i];
    } else if(num[i] < nextMin) { //If min < num[i] < nextMin || Means nums[i] is in between min and nextMin
        nextMin=num[i];
    }
}
return nextMin;
}

const arr = [ 6, 5, 3, 4];
const secondMin = findSecondMin(arr);
console.log('secondMin', secondMin);