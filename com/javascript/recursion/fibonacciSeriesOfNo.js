function getFibonacciTillLocation(loc) {

    let arr = [1];
    if(loc<=1) {
      return 1;
    }
 return getFibonacciTillLocation(loc-1) + getFibonacciTillLocation(loc-2); //fib of 5 => fib(4) + fib(3) 
   
}

const nTerms = 5;
console.log('Fibonacci series till 5'); 
for(let i=0; i<nTerms; i++) {
    const fibonacci = getFibonacciTillLocation(i);
    console.log( fibonacci);
}

