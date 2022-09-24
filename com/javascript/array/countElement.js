function countElement(arr) {
    const map = new Map();
    let maxCount = 0;
    let maxCountValue;

    for(let i = 0;i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1) // set elemrnt as key and it's count as existing count + 1
        } else {       
            map.set(arr[i], 1); // initially set element as key and it's count as 1
        }
        if(map.get(arr[i]) > maxCount) { // find element which has max count
            maxCount = map.get(arr[i]);
            maxCountValue = arr[i];
        }
    }
 return `${maxCountValue} => ${maxCount}`;
}
const arr = [1,2,5,2,1, 5, 6,3, 5, 1];
const elementCount = countElement(arr);
console.log('Max Element count', elementCount);