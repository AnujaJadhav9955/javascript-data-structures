function findTwoElements(arr, targetSum) {
    let helperMap = new Map(); // map to store traversed elemet

    for (let i=0; i< arr.length; i++) {// traverse all array elements
        if(helperMap.has(targetSum-arr[i])) { // check if (target sum - current element) is present in map
            console.log(helperMap.get(targetSum-arr[i]), i);// if above condition passes print that element's index and current element indes
        }
            helperMap.set(arr[i], i); // set traversed element in map
    }

}
const arr = [2,3,4,7,1,3,5];
const sum = 7;
findTwoElements(arr, sum);