
function getSortedElementByOccurence(nums) {

    const occurenceMap = new Map();
    let max = 0;

    for (let i =0; i<nums.length; i++) {
        if(occurenceMap.has(nums[i])) {
            occurenceMap.set(nums[i], occurenceMap.get(nums[i]) + 1) 
        } else {
            occurenceMap.set(nums[i], 1)
        }      
    }

    const list = []  
    occurenceMap.forEach((value, key) => {
        if(list[value] == undefined) {
            list[value] = [];
        }    
        let a = list[value];
        a.push(key);
        list[value] = a;
    
 })
 let result = [];
 for(let i = 0; i <list.length ; i++){
    let s = list[i];
    if(s !== undefined){
        s.forEach(e => result.push(e));
    }
 }
    return result;
}

const nums = [4, 3, 1, 2, 4, 3, 4, 2, 1, 5, 3, 3];
const sortedArray = getSortedElementByOccurence(nums)
console.log('Sorted Array', sortedArray);