function getSortedArray(arr) {
    if(arr.length === 1) { //If array length is 1 array is already sorted
        return arr;
    }
    for(let i=1; i<arr.length; i++){ //to travesre all the elements rom an array
        let j = i-1;
        while(j>=0 && arr[j] > arr[j+1]) { //to swap elements 
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            j--;
        }
    }
    return arr;
}

const arr = [3,2,4, 1]
const sortedArray = getSortedArray(arr);
console.log('Sorted Array', sortedArray);

//time complexity o(n2)
