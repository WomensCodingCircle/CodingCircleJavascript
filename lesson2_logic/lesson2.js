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




