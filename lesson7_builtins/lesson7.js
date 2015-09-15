1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) The Math Object
// Most languages have many standard libraries that you can load. Javascript has only a few
// and they load automatically. Instead of libraries, they are object.

// The Math object lets you perform mathmatical tasks. It stores values like PI as properties and
// functions like sin as methods

// Type Math on the console to explore it's properties and methods
Math;
// You can also read about them here
// http://www.w3schools.com/js/js_math.asp

// Using Math's properties
// Math.PI = the value of pi

console.log(Math.PI);
var radius = 10;
var circumferance = 2 * Math.PI * radius;
console.log(circumferance);

// Using Math's methods
// Math.min returns the minimum of all of its parameters
var min_val = Math.min(10,4,4,2,8);
console.log("The minimum is " + min_val);
// Notice that it doesn't take a array
Math.min([1,2,3,4]); //NaN
// NaN
// NaN stands for not a number. It is used when you expect a method to
// return a number but the inputs were bad so it cannot calcualte the number


// TRY IT
// Find the minimum of the following values 12,112,4584,33,456,1209,4467,4,6,-2,4263,68954,54454.

// Math.abs returns the absolute value (turns negative numbers positive)
console.log(Math.abs(-19));
// The value stays the same if the number is positive
console.log(Math.abs(19));

4) Rounding
// Unless you are doing lots of complex math, many of the methods of the Math object won't
// be used often.
// Rounding will be very useful, though

// Math.round(value) rounds the number the way you were taught in school
// >= .5 rounds up, <.5 rounds down
console.log(Math.round(4.5));
console.log(Math.round(4.8));
console.log(Math.round(10.2));
console.log(Math.round(3));

// Math.floor always rounds down
console.log(Math.floor(4.5));
console.log(Math.floor(4.8));
console.log(Math.floor(10.2));
console.log(Math.floor(3));

// Math.ceil (ceiling) always rounds up
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.8));
console.log(Math.ceil(10.2));
console.log(Math.ceil(3));

// TRY IT
// Round 15.36129 up

5) Random number generation
// Random number generation is great for making sure your program has some element of
// chance built it. Once you learn about random numbers, you'll find many places to use
// them.

// Math.random() generates a random number from 0 - 1 ex 0.43246762
console.log(Math.random());

// Generates 10 random numbers
for (var i = 0; i < 10; i++){
	document.write("<p>" + Math.random() + "</p>");
}

// You can generate a random number in any range you want using multiplacation and rounding
var num = Math.random();
// To start at zero, use Math.floor and go to 1 more than your upper limit
var between_zero_and_ten = Math.floor(num * 11);
console.log(between_zero_and_ten);
var num2 = Math.random();
// To start at one, use Math.ciel
var between_one_and_ten = Math.ceil(num2 * 10);
console.log(between_one_and_ten);

// You can select a random element of an array too using the same strategy
var drinks = ['iced tea', 'red wine', 'coke', 'water', 'root beer'];
// floor a random number times array length
var rand_drink_idx = Math.floor(Math.random() * drinks.length);
var my_drink = drinks[rand_drink_idx];
document.write("I'll have some " + my_drink);

// TRY IT
// Generate a random number between 0 and 45


6) Dates
// Javascript has a date object that lets you work with Dates

// Date() will give you the current date and time
var right_now = new Date();

// You can also create a specific date like this:
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// Everything after year is optional. If you don't care about specificity you
// can skip putting in milliseconds, or seconds, or minutes etc.
// Be careful month goes from 0 (January) - 11 (December)
// ex. new Date(2007, 5, 15) for Jun 15, 2007
var grace_hoppers_birthday = new Date(1906, 11, 9);
var aliens_land = new Date(2032, 4, 3, 14, 06, 12, 105);

// You can also use strings to set the date
var first_day_of_fall = new Date("2015-09-23");
// See here for all accepted strings
// http://www.w3schools.com/js/js_date_formats.asp

// You can print out dates using Date Methods
// Date.toDateString() -> Tue Sep 15 2015
// Date.toUTCString() -> Tue, 15 Sep 2015 15:02:07 GMT //to GMT
// Date.toString() -> Tue Sep 15 2015 11:02:43 GMT-0400 (EDT)

document.write(grace_hoppers_birthday.toDateString());

// TRY IT
// Print the day your birthday is this year in Date String format

7) Confirm
// Javascript has a confirm method that allows you say ok or cancel 
// (You have probably seen these before at other websites)
// If you press ok, it returns true, if you press cancel it returns false
// true/false = confirm(message); 
var ok = confirm("Do you want to go to prom with me?");
if (ok) {
	document.write("Yay!");
}
else {
	document.write("I'll just stay home and watch Netflix, then.");
}

// Try it
// confirm that someone likes puppies

8) Project
// We will be creating a website that plays the game MASH for you
// If you've never played got here for an explanation https://en.wikipedia.org/wiki/MASH_(game)
// Confirm that the user wants to play MASH.
// If they don't want to play, write to the document "You're no fun!" and don't do run the rest of the program
// Otherwise:
// Create an array called mash that has the following elements Mansion, Apartment, Shack, House
// Create arrays with 4 elements of your choice in each of the following categories (some good some bad)
//    person_to_marry, car, salary, date_of_wedding
// 	  (date_of_wedding should be populated with date objects)
// Select a random element from each array
// ** Challenge, write a function that selects a random element of any array
// Write to the document the category name and the selected element for each of the 5 categories
// <h1>Category Name</h1> <p>selected element</p>
// Use the toDateString to print out the date of wedding.
// If a user wants to play again, they can refresh the page



