function capitalize(str) {
    // Check if the input string is empty or null
    if (!str) return str;

    // Split the string into words
    const words = str.split(' ');

    // Capitalize each word
    const capitalizedWords = words.map(word => {
        // Convert the word to lowercase and capitalize the first letter
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the capitalized words back together
    return capitalizedWords.join(' ');
}

export default capitalize;
