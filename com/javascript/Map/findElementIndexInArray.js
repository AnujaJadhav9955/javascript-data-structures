
function findAllIndexesOfAllElementsInArray(nums) {
 let map = new Map();
 for(let i=0; i<nums.length; i++) {
    if(!map.has(nums[i])) {
        map.set(nums[i], [])
    } 
    // let lst = [];
    let lst = map.get(nums[i]);
    lst.push(i);
    map.set(nums[i], lst);
 }
return map;
}
const nums = [1,2,3,4,1]
const elementsWithItsIndexes = findAllIndexesOfAllElementsInArray(nums);
elementsWithItsIndexes.forEach((key, value) => {
    console.log(key, value);
})

//console.log('Elements and its indexes =>', elementsWithItsIndexes);