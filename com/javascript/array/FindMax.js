function findMax (nums)  {
    let max = 0;
    for (let i = 0; i<nums.length; i++) {
        if(nums[i]>max) {
            max = nums[i]
        }
    }
  return max;
}
const nums = [2, 3, 1, 9, 2, 5];
console.log('Max', findMax(nums));