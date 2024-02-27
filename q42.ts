// Array of magician names
const magicians: string[] = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];

// Function to print magician names
function show_magicians(magicians: string[]): void {
  console.log("Here are the magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to modify names and add "the Great"
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
}

// Show initial list
show_magicians(magicians);

// Make them great!
make_great(magicians);

// Show updated list
console.log("\nNow they are the Great:");
show_magicians(magicians);