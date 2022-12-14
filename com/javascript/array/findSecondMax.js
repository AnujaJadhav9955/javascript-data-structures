function findSecondMax (nums) {
let max = 0;
let prevMax= 0;
if(nums.length<2) {
    return "Array lenth is not sufficient"
}

//if get new max assign existing max to prevMax
for(let i = 0; i<nums.length; i++) {
    if(nums[i]>max) {
        prevMax=max;
        max=nums[i];
    } else if(nums[i]>prevMax) { //num[i] is not greater than max but grater than prevMax means ==> prevMax < num[i]  < max 
        prevMax=nums[i];
    }
}
return prevMax;
}

const arr = [4, 2, 7, 4, 8, 1, 12, 11];
const secondMax = findSecondMax(arr);
console.log('secondMax', secondMax);