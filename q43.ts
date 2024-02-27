// Array of magician names
const magicians: string[] = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];

// Function to print magician names
function show_magicians(magicians: string[]): void {
  console.log("Here is a list of amazing magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to modify magician names with "the Great"
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] += " the Great";
  }
}

// 1. Original magicians
console.log("\nOriginal magicians:");
show_magicians(magicians);

// 2. Modify the original array
make_great(magicians);
console.log("\nModified magicians (original array):");
show_magicians(magicians);

// 3. Create a copy and modify it
const greatMagicians = magicians.slice(); // Create a copy
make_great(greatMagicians);
console.log("\nModified magicians (separate array):");
show_magicians(greatMagicians);

// 4. Show the original array again (unchanged)
console.log("\nOriginal magicians (unchanged):");
show_magicians(magicians);