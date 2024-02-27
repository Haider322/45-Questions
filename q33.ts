// Store numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and determine the ordinal ending
for (const number of numbers) {
  let suffix;
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  // Print the number with the ordinal ending
  console.log(`${number}${suffix}`);
}