
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    const result = fibonacci(num - 1) + fibonacci(num - 2);
    return result; // set log point for this line as 'fib({num}) : {result}'
}

const fib = fibonacci(5);