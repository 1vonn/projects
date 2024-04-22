//A program of reverse interger

function reverseInteger(n) {
    let reversed = 0;

    // Manage the scenario when the input is negative.
    const sign = n < 0 ? -1 : 1;
    n = Math.abs(n);

    // Reverse the digits
    while (n > 0) {
        const digit = n % 10; // Retrieve the last digit
        reversed = reversed * 10 + digit; // Add the digit to the end of the reversed number
        n = Math.floor(n / 10); // Remove the last digit from the input
    }

    return reversed * sign;
}

// Test cases
console.log(reverseInteger(500));  // Output: 5
console.log(reverseInteger(-56));  // Output: -65
console.log(reverseInteger(-90));  // Output: -9
console.log(reverseInteger(91));   // Output: 19

