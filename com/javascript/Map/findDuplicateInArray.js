
function findDuplicateInArray(nums) {
const hashMap = new Map();

for (let i = 0; i<nums.length; i++) {
    if(hashMap.has(nums[i])) {
        return true;
    } else {
        hashMap.set(nums[i]);
    }
}
 return false;
}

const arr = [1,2,3,3,4];
const isDuplicateNumsInArray = findDuplicateInArray(arr);
console.log('Do we have duplicate elements inside Array =>', isDuplicateNumsInArray)