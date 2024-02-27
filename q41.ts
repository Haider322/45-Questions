// Array of magician names
const magicians: string[] = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];

// Function to print magician names
function show_magicians(magicians: string[]): void {
  console.log("Here is a list of amazing magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Call the function to display the magicians
show_magicians(magicians);