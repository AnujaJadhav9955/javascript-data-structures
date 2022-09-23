function findMin (nums) {
    let min = nums[0];
    for (let i=1; i< nums.length; i++) {
        if(nums[i]<min) {
            min=nums[i];
        }
    }
    return min;

}

const nums = [8, 4, 3, 10, 1]
const minNum = findMin(nums);
console.log('min', minNum);
