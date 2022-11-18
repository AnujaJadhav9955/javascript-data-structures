function findFirstOccurenceOfEachElement(arr) {
    let map = new Map();
    for(let i=0;i<arr.length;i++) {
        if(!map.has(arr[i])) { // checking if element is not prsent in hashMap, that means it is the first occurence of element
            map.set(arr[i], i); //setting first occurence of element in hashmap
        }
    }
return map;
}
const arr = [2,4,6,2,8,9,3,2,4];
const ElementsWithTheirFirstOccurence = findFirstOccurenceOfEachElement(arr);
ElementsWithTheirFirstOccurence.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})
