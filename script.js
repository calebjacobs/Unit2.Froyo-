// Prompt the user for froyo flavors upon entering the website
const userInput = prompt("Please enter your froyo flavors, separated by commas (e.g., vanilla,vanilla,strawberry,coffee)");

// Split the input string into an array of flavors
const flavorArray = userInput.split(",");

// Function to count the frequencies of flavors
function countFlavors(flavors) {
    const flavorCounts = {};
    for (let flavor of flavors) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }
    return flavorCounts;
}

// Count the flavors and log the result
const flavorCounts = countFlavors(flavorArray);
console.log(flavorCounts);
