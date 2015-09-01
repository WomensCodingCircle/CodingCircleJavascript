1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Functions
// We've called functions before, but now it is time to learn a little more about them
// Functions are blocks of code that can be run and reused.
// They can be stand alone functions or attached to an object (then they are called methods)

// CALLING FUNCTIONS
// To call a function use its name followed by parenthesis. 
// If it needs inputs, put the inputs in between the parenthesis, separated by commas
// function(param1, param2)
parseInt("4700");

// You can store the result of a function in a variable
var costOfEuropeanVacation = parseInt("4700");

//Or use it in an expression where you want to use its value
var myAccountBal = 2500;
if (myAccountBal > parseInt("4700")) {
	document.write("Let's go see castles!");
}

// Objects can have funstions too, these functions are called methods
// To call a method use a '.' after the object and then the method name, parenthses and any parameters in the parenthesis
// object.method(param1, param2)
// document.write is an example of a method call
document.write("Hey, I've been using functions since the begining?");
// document is an object
// write is the method
// "Hey, I've been using functions since the begining?" is the parameter

4) Writing your own function
// If you have several lines of code you use again and again, you might want to write a function
// A function is a block of code like any other code block (ifs and loops) so it looks similar
// function nameOfFunction(param1, param2) {
//	code that usese parameters
//  return value
// }

// a very simple function, no parameters, no return
function myFirstFunction() {
	document.write("I made this!");
}
// calling the function
myFirstFunction();

// Parameters
function admire(item) {
	document.write("Oh that is a beautiful " + item + ".");
}
admire("topaz");
admire("nebula");
admire(3);
admire(['my', 'beautiful', 'array']); // will this work?

// Return values
// Instead of printing something (or logging something), you can have your function return something
// The return value is that value your function will have if called in an expression or stored in a variable.
// to return something use the syntax:
// return returnValue;
function isPrecious(gemstone) {
	// match the lower case gemstone
	gemstone = gemstone.toLowerCase();
	// check if the gemstone name matches one of the precious ones
	if (gemstone == 'diamond' || gemstone == 'ruby' || gemstone == 'sapphire' || gemstone == 'emerald') {
		return true;
	}
	else {
		return false;
	}
}

console.log("Diamonds are precious ", isPrecious('Diamond'));
console.log("Quartz are precious ", isPrecious('quartz'));
console.log("How about rocks, are they precious? ", isPrecious('ROCK'));

// Let's write a useful function
// This will write a paragraph element with an id and some content 
// Take that document.write
function makeParagraph(id, content) {
	var paraString = "<p id='" + id + "'>" + content + "</p>";
	document.write(paraString);
}
makeParagraph("gemstones", "Diamond, Ruby, Sapphire, Emerald");
// Not only does it make a nice looking paragraph with new lines and spacing,
// we can access its content using the id
var contentOfGemstones = document.getElementById('gemstones');
console.log(contentOfGemstones);

5) Careful about returns vs print
// If you don't use a return statment, your function will return undefined.
// Be careful, printing is not the same thing as returning
var celestial = makeParagraph("CelstialBodies", "Star, Black Hole, Nebula");
console.log("Celestial = ", celestial);
// since makeParagraph doesn't have a return statement, assigning the result to a variable is meaningless.

// isPrecious has a return statement though
var rubyPrecious = isPrecious('ruby');
if (rubyPrecious === true) {
	console.log("I can wear rubies to the winter ball.");
}
else {
	console.log("Let's keep looking");
}

6) First Class Functions
// In javascript, functions are first class objects. This means that they can be used anywhere,
// They can be assigned to variables or used as parameters.
// Lets try using a function as a parameter
function callOtherFunction(otherFunction){
	otherFunction();
}
// myFirstFunction is a function.
callOtherFunction(myFirstFunction);

// By the way, if you see this output in your console:
//
// > console.log(myFirstFunction)
//  function myFirstFunction()
//
// It usually means you forgot to call your function with parenthesis. 

7) setTimeout
// Javascript has a function that will run some code after so many milliseconds
// setTimeout takes as parameters the function to run, and the number of milliseconds to wait to run that function
// 1000 milliseconds = 1 second
setTimeout(myFirstFunction, 2000);

// You can give parameters to the function setTimeout calls by adding them to the end of the parameter list
setTimeout(makeParagraph, 1000, 'snake', 'Hssss!');

8) Project
// We are going to make a haunted website
// Write a function makeImage that takes as a parameter an id and src and writes a paragraph to the page  with the id specified with the content of an image with src attribute specified
//    <p id='id'><img src='src'/></p>
// Call setTimeout with an interval of 4 seconds to call makeImage with and id of the ghost's name and a src of ghost.jpg
// ** Challenge **
// Let the user guess the ghost's name to make her disappear. 
// Write a function that prompts the user to guess the ghost's name, and if they get it right, selects the paragraph with the id of the ghost's name and sets the innerHTML to ''
// Call setTimeout with this function after an interval of 4.5 seconds


