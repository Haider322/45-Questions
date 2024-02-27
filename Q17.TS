/* Following friends were invited in the last exercise.
Zafar, Tahir, Tariq, Talha, Akram, Sarwar
----------------------------------------------------
Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
*/
 let myFriends = ["Zafeer", "abdhullah", "asad", "azam", "Ali", "Sameer"];
console.log(
  `I can invite only two guests for dinner from my friends ${myFriends}`
);
/*
Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
let sameer = myFriends.pop();
console.log(`${sameer}, I'm unable to call you in the dinner. Sorry`);
console.log(`My remaining friends will be ${myFriends}`);
 let Ali = myFriends.pop();
     
  console.log(`${Ali}, I'm unable to call you in the dinner. Sorry`);


        console.log(`My remaining friends will be ${myFriends}`);
    
       let azam = myFriends.pop();
console.log(`${azam}, I'm unable to call you in the dinner. Sorry`);
console.log(`My remaining friends will be ${myFriends}`);
let abdhullah = myFriends.pop();
console.log(`${abdhullah}, I'm unable to call you in the dinner. Sorry`);
console.log(`My remaining friends will be ${myFriends}`);

// Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log(`${myFriends}, are still invited in the dinner.`);

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Zafeer = myFriends.shift();
console.log(myFriends);

let habbib = myFriends.pop();
console.log(myFriends);