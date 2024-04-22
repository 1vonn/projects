//A program to capitalize words
function capitalizeFirstLetter(str) {
    // Divide the given input string into an array of words
    let words = str.split(' ');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        // Check if the word is not an empty string
        if (words[i] !== '') {
            // Make the initial letter of the word uppercase and combine it with the remainder of the word.
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }

    //Combine the words together to form a unified string, then provide it as the output.

    return words.join(' ');
}

// Test the function
console.log(capitalizeFirstLetter("hi")); // "Hi"
console.log(capitalizeFirstLetter("I love programming")); // "I Love Programming"
