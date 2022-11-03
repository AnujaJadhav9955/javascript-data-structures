function binarySerach(arr, num) {
    let end = arr.length - 1; // set end to the last element of the array
    let start = 0; //start to first element of the array
    let mid;
    while(start < end) {
        mid = parseInt((start + end + 1)/2); //find mid by dividing
        if(arr[mid] == num) {   
            return mid;
        }
        if(num > arr[mid]) {
            start = mid + 1;
        } else if(num<arr[mid]) {
            end = mid-1;
        }
    }
    return -1;
}

const arr = [10, 30, 40, 60, 77];
const elementIndex = binarySerach(arr, 30);
console.log('elementIndex using binary search', elementIndex);