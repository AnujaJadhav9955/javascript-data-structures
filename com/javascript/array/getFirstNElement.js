//Using For Loop
function getFirstNElement(arr, n) {
    if(n>arr.length) {
        return "Asking more elements than the length of the array!!"
    }
    const firstNElement = [];
    for (let i=0; i<n; i++) {
        firstNElement.push(arr[i]);
    }
return firstNElement;
}

//Using Slice method
function getFirstNElementUsingSlice(arr, n) {
    if(n>arr.length) {
        return "Asking more elements than the length of the array!!"
    }
    return arr.slice(0, n);
}

//Array declaration & Function Calling
const arr = [3, "anuja", 7, 8];
const firstNElement = getFirstNElement(arr, 3);
console.log(firstNElement);

console.log(getFirstNElementUsingSlice(arr,4));

