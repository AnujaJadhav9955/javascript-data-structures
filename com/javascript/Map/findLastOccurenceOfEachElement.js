function findLastOccurenceOfEachElement(arr) {
    let map = new Map();
    for(let i=0; i<arr.length;i++) {// traverse all elements of array
        map.set(arr[i], i); //set index for element everytim, so if previously assigned it will override, at the end will get last index
    }
    return map;
}

const arr = [2,4,6,2,8,9,3,2,4];
const ElementsWithTheirLastOccurence = findLastOccurenceOfEachElement(arr);
ElementsWithTheirLastOccurence.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})