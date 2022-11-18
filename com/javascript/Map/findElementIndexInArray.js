
function findAllIndexesOfAllElementsInArray(nums) {
 let map = new Map();
 for(let i=0; i<nums.length; i++) {
    if(!map.has(nums[i])) { //If element not present in map set element as key and empty array as value 
        map.set(nums[i], [])
    } 
    let lst = map.get(nums[i]); // get indices list of element
    lst.push(i); //push new index to the current element
    map.set(nums[i], lst); // set new indices list to the current element
 }
return map;
}
const nums = [1,2,3,4,1]
const elementsWithItsIndexes = findAllIndexesOfAllElementsInArray(nums);
elementsWithItsIndexes.forEach((key, value) => {
    console.log(key, value);
});