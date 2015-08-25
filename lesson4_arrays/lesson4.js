1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Arrays
// Arrays are a way to store multiple values in a series

// CREATION
// An array is created with square brackets and elements separated by a comma
var creatures = ['Dragon', 'Unicorn', 'Naga', 'Griffon'];
console.log(creatures);
// You can fill your array with numbers
var counting = [0, 1, 2, 3, 4, 5];
// Or you can mix types
var randoms = [True, 1, 'abcde', 3.14];
//Or even empty
var empty = [];

// ACCESSING ELEMENTS
// to access an element of an array you use [element_number]
// array indexing starts at 0
var first_creatue = creatures[0];
document.write("The " + first_creatue + " is dangerous yet beautiful.");

var fourth_number = counting[4];
console.log("The fourth number is " + fourth_number);

// You can use the values of an array just like you would use the individual elements
console.log(counting[2] * counting[5]);

//If you pick an index that is not in the array the value is the special value undefined. (NOT an error!)
var is_this_a_creature = creatures[100];
console.log(is_this_a_creature + " is one of many mythical beasts.");

// TYPE
// The type of an array is actually 'object'. We'll learn about objects next week.
console.log(typeof(creatures));

4) Array Methods
// Arrays have many built in methods you can use.

// length
// The count of the elements in the array
var number_of_creatures = creatures.length;
document.write("We have " + number_of_creatures + " in our magical zoo.");

// sort
// Sorts the array in place (the original variable will now contain a sorted array)
creatures.sort();
console.log(creatures);

// reverse
// Reverses the array in place
creatures.reverse();
console.log("The last creatures alphabetically is the gentle " + creatures[0]);

5) Push, Pop, Shift, Unshift
// There are special array methods for adding an removing elements from the beginning and end
// Push adds to the end
creatures.push("Elephant");
console.log(creatures);

// Pop deletes the element from the end and returns it
var not_actually_mythical = creatures.pop(); 

// Shift takes the element from the beginning and returns it
var setting_this_one_free = creatures.shift();

// Unshift adds an element to the beginning
creatures.unshift("Kappa");

6) Slice
// You can access a subset of the array using slice
// Slice takes 2 parameters, index to start from and index to go to (not inclusive)
var flowers = ['orchid', 'rose', 'lilac', 'pansy', 'water lily', 'daisy'];
var garden = flowers.slice(1,3);
console.log(garden);

//the original array stays the same
console.log(flowers);

7) String Split
// You can make an array out of a string by using split. 
// split take a single paramater (which character or characters to split the string on)
var sentance = "I will plant some roses in the dragon's enclosure";
// split on space to get the words
var words = sentance.split(' ');
console.log(words);

// You can get the characters if you split on empty string ''
console.log(not_actually_mythical.split(''));

8) Loops (while, for)
// This is the other most powerful tool in the programmers belt.
// A loop is a way to tell the computer to run the same bit of code many times
// A for loop with incrementor:
// a for loop takes a condition and then runs the code for that many times
// The condition has three parts
// 1) variable assignment: var i = 0;
// 2) boolean condition that when met the loop will stop: i< 10;
// 3) piece of code to run to make condition closer to being met: i++;
// It looks like this:
// for (part 1; part 2; part 3) {
//	code to run;
// }
for (var i = 0; i < 10; i++) {
	document.write(i + " ");
}

// a) a for loop sets the variable first (1) , 
// b) then checks the condition (2). 
// c) Checks if condition is tru
// d) it runs the code. 
// e) Then it runs (3) 
// f) and checks the condition again (if true go to d, if false go to g)
// g) loop exits 

// you can set play around with the values, code and condition
for (var i = 100; i >= 0; i -= 10) {
	document.write(i + " ");
}

// with array
// Arrays play really nice with loops

for (var i = 0; i < creatures.length; i++) {
	document.write("We are going to see the " + creatures[i] + "s! ");
}

// While loops only take one condition. As long as it is true, the code runs again and again.
// while (condition) {
// 	code to run
// }
var count = 0;
while (count < 5) {
	count += 1;
	console.log(count);
}

// While loops also play nice with arrays.
while (creatures.length > 0) {
	console.log(creatures.pop());
}

// Watch out infinate loops are possible. The only way to stop an infinate loop is to quit the program.
while (true) {
	console.log("The wheels on the bus go round and round");
}

9) Loop control (break and continue)
// You can stop a loop from runing by using the break statement
var count = 0;
while (count < 5) {
	count += 1;
	console.log(count);
	if (count == 3) {
		break;
	}
}

// You can skip that iteration of a loop with the continue statement
// This will skip the chunk of code after the continue statement and just go to the next iteration of the loop
var creatures = ['Dragon', 'Unicorn', 'Naga', 'Griffon'];
for (var i = 0; i < creatures.length; i++) {
	if (creatures[i] == 'Naga') {
		document.write("Ewww, I don't like snakes.");
		continue;
	}
	document.write("We are going to see the " + creatures[i] + "s! ");
}

10) Project
// We are going to create a censor website. It will take a user's statement and censor out the 'bad word'. 
// If a user is particualry filty, it will quit!
// Prompt the user for a sentance and store it in a variable called sentance
// pick a 'bad' word and store it in a variable called bad
// pick a 'filthy' word and store it in a variable called filthy
// split the users sentance into an array of words and store it in a variable called words.
// * Hint look into the split method
// Loop through each word of the users sentance
// if the word is equal to the bad word write 'beep' to the document
// else if the word is equal to the filthy word write "Wash your mouth!" to the document and break out of the loop (you don't want to dirty your program)
// else, print the word to the document
//


