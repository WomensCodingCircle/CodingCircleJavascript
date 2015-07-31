1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Alert
// All statements should end with a semicolon
alert("Hello world!");

4) console.log
// Forget everything you learned about alert. Never use alerts!
console.log("Hello world");
// You can log mutiple things, separate them by commas.
console.log("Only I will ever see this", "my secret logs ;)");

5) document.write
//appends to page
document.write("Hello coding circle!");

6) Variables/Assignment
// You need to declare variables in Javascript
// You use the var keyword.
var name;

// You assign a variable a value using =
name = 'Charlotte'; // we already declared it in the lines above

var numberOfPuppies = 11;
var cakePrice = 4.50;

// You can use the variable in the same place you would use the value assigned to the variable
console.log(name);
console.log(numberOfPuppies, ' puppies. Awwwww!'); 

7) Comments
// A single line comment uses the double backslash '//'
var x = 1; // comments can also be at the end of lines of code

/* If you have a longer comment
You can use the star-slash type of comments
you open with a slash-star and it goes to the star-slash
*/

8) Where to put javascript script tags and files
// You can put javascript directly in an html file
<script type='text/javascript'>
</script>

// You can also put javascript in its own file and load it using the src attribute (just like css)
<script type='text/javascript' src='path/to/javascriptfile.js'></script>


9) Selecting elements and innerhtml
// Javascript is at it's best when it is interacting with HTML
// You can select elements on a page
document.write("<p id='myid'>Hi I'm a paragraph</p>");
var myEl = document.getElementById('myid');

// Once you have an element you can get and set its content with innerHtml
// Getting content
console.log(myEl.innerHTML);

// Setting content
myEl.innerHTMl = name;

10) Prompts
// You can prompt a user for input and save what they wrote to a variable
var userInput = prompt("What are you doing?");
console.log(userInput);

// Now you can do something with that input
Document.write(userInput);

11) Strings and concatenation.
// So far we have learned used strings but not learned about them
// strings are a piece of data made up of a sequence of characters.
// strings are denotated by single quotes or double quotes
var string1 = "abcde";
var string2 = "I am a whole statement";
var numString = "1234";
var charString = "c";
var punctString = '$#@|}{';
var contractionString = "I've got a contraction";

// You can combine two strings into one using the + operator
var combinedString = string1 + string2;
var combined2 = numString + "56789";

12) Project: Fortune telling website
// We will create a fortune telling website (don't let anyone know that it tells the same fortune to everyone)

// Open fortune.html
// Put a script tag in so that you can write your javascript.
// Prompt the user for their name and store it in a variable called name
// Replace the content in the h1 element with id of title with the "User name's fortune" making sure you use the name they entered
// Replace the content in the p element with id of fortune with a fortune of your choice. (bonus points if you use the user's name that they entered)
















