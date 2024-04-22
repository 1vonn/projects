// A program  to generate Fibonacci sequence up to 100
function generateFibonacci(n) {
    // Initialize an array to store the Fibonacci sequence
    let fibonacciSequence = [];

    // The starting values for Fibonacci sequence
    let a = 0, b = 1;

    // Add starting values to the sequence
    fibonacciSequence.push(a);
    fibonacciSequence.push(b);

    // Produce Fibonacci sequence
    while (a + b <= n) {
        let next = a + b;
        fibonacciSequence.push(next);
        a = b;
        b = next;
    }

    // Return the Fibonacci sequence
    return fibonacciSequence;
}

// Call the function to generate Fibonacci sequence up to 100
let fibonacciSequenceUpTo100 = generateFibonacci(100);

// Print the Fibonacci sequence
console.log("Fibonacci sequence up to 100:");
console.log(fibonacciSequenceUpTo100.join(', '));
