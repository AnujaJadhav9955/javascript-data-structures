function getFactorial(num) {

    if(num<=1) {
        return 1;
    }
    return num * (getFactorial(num-1));

};

const factorial = getFactorial(5); //factorial of 5 => 5 * 4! and factorial of 4=> 4 * 3! and so on 
console.log('Factorial==>', factorial)