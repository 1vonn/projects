//A program to count vowels
function countVowels(sentence) {
    // Change all the letters in the sentence to lowercase to make it easier to determine if they are vowels
    sentence = sentence.toLowerCase();
    
    // Specify the set of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let vowelCount = 0;
    
    // Iterate through each character of the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(sentence[i])) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

// Test the function
console.log(countVowels("Hello World")); // Output: 2

