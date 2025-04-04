//Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
let fullName = prompt("Enter your full name");
console.log(`@${fullName}${fullName.length}`)