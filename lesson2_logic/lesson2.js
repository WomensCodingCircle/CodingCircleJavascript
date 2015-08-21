1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Booleans 
// Booleans are a new datatype. A boolean has one of two values: True or False.
var IAmSmart = true;
var IAmWealthy = false;
console.log("I am smart: ", IAmSmart);
console.log("I am wealthy: ", IAmWealthy, " ...Oh, well...");

4) Equal to operator
// '==' is called the equal operator. It checks if the values on either side of itself are
// equal and returns a boolean, true if they are equal, false if they are not equal
var soda = "Pepsi" == "Coke";
console.log("Sure, waiter, Pepsi is OK: ", soda);

var quotes = 'Cookies and Cream' == "Cookies and Cream";
console.log("Single quoted strings and double quoted strings the same: ", quotes);

// Don't confuse the equals(==) operator with the assignment operator (=)
// '==' checks to see if 2 values are the same
var color = 'Blue';
color == 'Teal';

// '=' assigns a value to a variable
var color = "Purple";
color = "Lavender";
console.log(color);

5) If statements
// An if statments is a block of code that only runs if the condition is true
// if (condition) {
//     code that only runs if condition is true	
// }
if (IAmSmart) {
	document.write("To acquire knowledge, one must study; but to acquire wisdom, one must observe. --Marilyn vos Savant");
}

if (IAmWealthy) {
	document.write("Ferrari's for everyone!");
}

6) Else and Else If
// If the condition for the if statement is false, you can tell it to do something else instead using the else keyword
if (IAmWealthy) { // false
	document.write("Buy it now!"); // won't execute
}
else {
	document.write("Better save up."); // will execute
}

// You can add more if cases by using the else if keyword. Only one case will have the inner code run.
// Else condition will only execute if all if and else if conditions are false
if (IAmWealthy) {
	console.log("Alright!");
}
else if (IAmSmart) {
	console.log("I'll be ok.");
}
else {
	console.log("This sucks :(");
}

// You can chain multiple else if conditions
// Only one condition will have code run.
// As soon as the code finds one if or else if that is true, that code will run and it won't test any of the other conditions
var IAmTalented = true; 
if (IAmWealthy) {
	console.log("Alright!");
}
else if (IAmSmart) {
	console.log("I'll be ok.");
}
else if (IAmTalented) {
	console.log("I'll be wealthy, soon.");
}
else {
	console.log("This sucks :(");
}

7) String methods
// There are several operations that you can perform on strings.
// You call a string method with a '.', the method name, and then "()". If you have any input to the method you put them in the parentheses 

// toLowerCase returns the lowercase version of a string
var silly = "i Am WrItInG lIkE i Am 13!";
console.log(silly.toLowerCase());

// toUpperCase returns the uppercase version of a string
var quiet = 'shhh i am writing a very quiet sentance';
console.log(quiet.toUpperCase());

// trim removes whitespace from the beginning and end of a string
var wide = "            \tnot much here             \n";
console.log(wide.trim());

// search returns where a string matches a pattern
// It returns -1 is there is no match
var hidden = "I am hidden, you can't find me!";
console.log(hidden.search("me"));

// charAt returns the character at a position
// The first position starts at 0
console.log(silly.charAt(5));
console.log(silly.charAt(0));

// You can use these string methods in your if statements
var name = prompt("What is your name?");
if (name.toLowerCase() == 'charlotte') {
	document.write("Welcome to the palace.");
}
else {
	document.write("The dungeons are over there...");
}


8) Not, And, Or
// These are logical operators that you can use to combine two or more booleans
// && and
// || or
// !  not

// && Truth table  (only true if both values are true)
// val1  |  val2  |  val1 && val2
// true  |  true  |  true
// true  |  false |  false
// false |  true  |  false
// false |  false |  false

// || Truth table  (true if at least 1 value is true)
// val1  |  val2  |  val1 || val2
// true  |  true  |  true
// true  |  false |  true
// false |  true  |  true
// false |  false |  false

// ! Truth table (the opposite of the value)
// val1  |  ! val1
// true  |  false
// false |  true


if (IAmSmart && IAmWealthy) {
	document.write('JACKPOT!');
}

if (IAmSmart || IAmWealthy) {
	document.write("I'll have a good life.");
}

if (!IAmSmart) {
	document.write("Do you want to invest in Amway?");
}

9) Project
// We are going to create a secret page. You need a password to access it.
// When the page loads prompt the user for the password and save it in a variable
// Pick a password for your site and store in in a variable called site_password
// If the user enters the password correctly fill in the paragraph with id of 'response' with a secret message
// Else If the user enters the right password but with the wrong case i.e. TestPass instead of testpass, Fill in the paragraph with id of 'response' with "Close, check your cases."
// **Hint: compare the lower case version of the guess to the lowercase version of the password
// Else If the user enters the wrong password but it starts with the right first letter, encourage them, Fill in the paragraph with id of 'response' with "Getting warmer, keep trying"
// **Hint: the first letter's index is 0
// Otherwise, Fill in the paragraph with id of 'response' with "Nope, not even close. You'll never learn my secret"







