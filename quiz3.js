//A program of power of two
function isPowerOfTwo(n) {
    // Check  and Verify whether the number is greater than zero and not equal to zero
    if (n <= 0) {
        return false;
    }
    
    // Determine if the binary representation of the number contains precisely one bit that is set to 1.
    // If this condition is met, then the number is a power of 2.
    return (n & (n - 1)) === 0;
}

// Test the function
console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(6));  // false
