import inquirer from "inquirer";
let age = await inquirer.prompt({
  type: "number",
  name: "age",
  message: "How old are you?",
});
if (age.age < 2) {
  console.log("You are a baby");
} else if (age.age >= 2 && age.age < 4) {
  console.log("You are a toddler");
} else if (age.age >= 4 && age.age < 13) {
  console.log("You are a kid");
} else if (age.age >= 13 && age.age < 20) {
  console.log("You are a teenager");
} else if (age.age >= 20 && age.age <= 65) {
  console.log("You are a adult");
} else if (age.age > 65) {
  console.log("You are a elder");
}