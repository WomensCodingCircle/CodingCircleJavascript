1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Numbers
// Javascript can store numbers in variables. 
var three = 3;

// A number can also include a decimal point
var pi = 3.14;

// If you don't want a number and actually want a string, use quotes
var three_string = "3";

4) Arithmetic on numbers
// Javascript has built in operators that allow you to perform basic arithmatic on numbers
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Modulus
// ++	Increment
// --	Decrement

console.log(1 + 2); // 3

console.log(10 - 15); // -5

console.log(3.5 * 2); // 7

console.log(5/3); // 1.666

// The increment and decrement operators add 1 or subtract one to the variable and set the variable equal to the new value
var numberOfPuppies = 6;
// OOOh I found another puppy!
numberOfPuppies++;
console.log(numberOfPuppies);

// Oh well, its owner took it back...
numberOfPuppies--;
console.log(numberOfPuppies);

// Modulus takes the remander of division
var remander = 5 % 3;  // 5 / 3 = 1 with a remander of 2.  5 % 3 = 2

5) Precedence and parentheses
// You can chain multiple arithmetic operators together. 
// The expression is evaluated in order of Please excuse my dear aunt sally
console.log(5 + 4/2 - 1);
 
// Expressions in parentheses are fully computed before the value is used in the rest of the expression.
// Always use parentheses so that you make your intetion clear
var result = (5+4) / (2-1);
console.log(result);


6) Assignment operators
// Since operating on a variable and saving it to the same variable is so common,
// there are shortcuts for this opertation 
//  =	    x = y	           x = y
//  +=	    x += y	           x = x + y
//  -=	    x -= y	           x = x - y
//  *=	    x *= y	           x = x * y
//  /=	    x /= y	           x = x / y
//  %=	    x %= y	           x = x % y

var hourlyRate = 35;

// Getting a raise
hourlyRate += 4;
console.log(hourlyRate);

// Overtime
hourlyRate *= 1.5;
console.log(hourlyRate);

// Fired :(
hourlyRate -= hourlyRate;
console.log(hourlyRate);


7) Comparison operators
// You have some more option in comparison operators with numbers
// each comparison opertor returns a boolean 
// ==	equal to
// !=	not equal
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to

var cheetah_speed = 76;
var cat_speed = 30;
var giraffe_speed = 32;
var deer_speed = 30;
var my_speed = 5;
var turtle_speed = 1;

var faster_than_cheetah = my_speed > cheetah_speed;
console.log("Am I faster than a cheetah?", faster_than_cheetah);

if (my_speed >= giraffe_speed) {
	console.log("Wow! I'm fast");
}
else {
	console.log("That is about what I expected");
}

if (cat_speed == deer_speed) {
	console.log("This will be an interesting race");
}
else {
	console.log("I'm probably going to be on the deer");
}

if ((turtle_speed > my_speed )|| (turtle_speed > cat_speed) || (turtle_speed > cheetah_speed)) {
	console.log("Dang, that is one fast turtle!");
}


8) The typeof operator
// You can check the type of variables with the the type of opertator
console.log(typeof("string"));
console.log(typeof(3));
console.log(typeof(3.14));
console.log(typeof(false));

9) Strings to numbers to strings
// You can cast a string to a number 
// parseInt turns the value to an interger (no decimal)
var sixty = parseInt("60");
console.log(sixty, "is a", typeof(sixty));

// parseFloat turns the value to a float (decimal point)
var precise_pi = parseFloat("3.1416");
console.log(precise_pi, "is a", typeof(precise_pi));

10) Strings vs numbers
// Some operators are used for both strings and numbers
if (3 == three) {
	console.log("The variable three is equal to 3");
}

if ('3' == three_string ) {
	console.log("The variable three_string is equal to '3'");
}

// You can get into trouble though
if (three == three_string) {
	console.log("Wait, what?");
}
// In this case javascript casts the two values to the same type. Then they are equal.

// You can use === and !== to make sure that both the types and values match
if (three === three_string) {
	console.log("Now, this is just crazy");
}
else {
	console.log("Well this makes more sense");
}

// + is concatination for strings and addition for numbers
// numbers
console.log(3 + 3);
// strings
console.log('3' + '3');
// be careful, a number plus a string is concatination, not addition
console.log(3 + '3');



11) Project: TV Show Selector
// We are going to create a page that helps users select which TV show to watch
// Prompt the user for their birth year and store it in a variable called birth_year
// Prompt returns a string, so parseInt to make it a number **challenge, write an error to the document if parseInt fails
// Subtract their birth year from current year and store the result in a variable called age.
// Now we recommend the tv show. 
// If age is less than 12, fill in the paragraph with id of 'tv' with "Let's watch Sesame Street!"
// Else if age is greater than or equal to 12 and  less than 70 fill in the paragraph with "Let's watch Orange is the New Black."
// Else fill in the paragraph with "Let's watch Matlock."