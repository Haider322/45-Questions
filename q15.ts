// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think ofsomeone else to invite.


let guest_list=["Ammad","Hussnain","Zain","Haider"]




console.log("You are invited for a dinner tonight, Ashad")

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


console.log(guest_list.pop());
guest_list.pop();

/*Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.*/


guest_list.push("Ashad");


// • Print a second set of invitation messages, one for each person who is still
// in your list.
console.log("you are invited for dinner in my house,",guest_list[0])
console.log("you are invited for dinner in my house,",guest_list[1])
console.log("you are invited for dinner in my house,",guest_list[2])
console.log("you are invited for dinner in my house,",guest_list[3])