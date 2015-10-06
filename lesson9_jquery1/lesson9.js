1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Javascript Libraries
// Javascript Libraries are files with javascript functions or objects that someone else wrote.
// They allow for easier development of javascript applciations. Let someone else
// write all the boring functions and you spend your time on the important things
// (Also very helpful to allow someone else to debug thier library's code)

// JQuery
// JQuery is by far the most popular javascript library.
// It has many functions to make things that you do all the time way easier. (Like document.getElementById)
// It has code for selection, animation, manipulation, and events.
// It uses the $ to distinguish when you are using a function from jquery (that way
//	you don't have to worry about it stepping on your own function and variable names)

5) How to use JQuery (or any javascript library)
// You have 2 options to include a javascript library.
// 1. Download and include in your html 
// 	    download jquery here https://jquery.com/
//      Save it in the same directory as the rest of your web files as 'jquery.js'
//      include it in your html file like this
//      <script src='jquery.js' type='text/javascript'></script>
// 
// 2. CDN
//   Some popular javascript libraries are hosted on CDNs (content delivery networks)
//   This means you rely on someone like google to retrieve and host your libraries for you
//   To include Jquery from a CDN find it at google cdn https://developers.google.com/speed/libraries/
//   Include it like this in your html file
//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
//  
// No matter which method you use make sure the jquery script tag appears before any of your own script tags. 
// Otherwise your code won't be able to use JQuery.

// TRY IT
// Open example.html and load Jquery in using the CDN

// From here on out we will use example.html, make sure you have added in jquery using the CDN.

6) Selectors
// JQuery makes selecting elements so easy (bye bye document.getElementById!)
// When you select something, it returns a DOM element.

// To get an element by tag name
// var elements = $('tagname');
var paragraphs = $('p');
console.log(paragraphs);

// To get an element by id
// use a # in front of the id name
var first = $('#first');
console.log(first);

// To get an element by class
// use a . in front of the class name
var english = $('.english');
console.log(english);

// TRY IT
// Select all of the elements with class latin

// Next up, what can you do with these DOM elements?

7) Hide and Show
// You can use jquery to hide or show elements

// To hide
// element.hide();
first.hide();

// To show
// element.show();
first.show();

// To toggle from hidden to displayed and back again
// element.toggle();
english.toggle(); // Run these one at a time
english.toggle();
english.toggle();
english.toggle();

// Nothing with happen if you hide an element that is already hidded or show an element that is already shown

// TRY IT
// Toggle the element with id of first, then toggle it back

8) Get and Set
// You can easily get and set the html of elements
// Sayonara document.getElementById('id').innerHTML!

// To get what is between the tags we use 
// var element_text = element.text();
var second = $('#second');
var second_text = second.text();
console.log(second_text);
// To set the value between the tags we give the text function a parameter with the value 
// we want the tag to have
// element.text('new value');
second.text("If I see one more lorem ipsum, I will PUKE!");

// If you want to include the html tags along with the value, you can use element.html()
var second_html = second.html();
console.log(second_html);
// To set the value and tags we give the text function a parameter with the value 
// we want the tag to have
// element.text('new value');
second.html("<h1>If I see one more lorem ipsum, I REALLY will PUKE!</h1>");

// TRY IT
// Get the text of the element with ID of third

9) Adding and removing
// JQuery can be used to add and remove elements and text.

// You can add to the beginning of an element by using .prepend()
first.prepend("LOREM IPSUM");

// You can add to the end of an element using .append()
first.append("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.");

// You can use this to add new elements too
var blankDIV = $('#blankDIV');
blankDIV.append("<p>I'm a brand new paragraph.</p>");

// To delete an element, you use .remove()
blankDIV.remove();

// Be careful! This can be dangerous, as you can't get the element back after you remove it

// You can add to the whole document by using 'body' as your selector
// Bye bye document.write()!
var doc = $('body');
doc.append("<p>I should appear at the end of the document.</p>");

// TRY IT
// Add your name to the end of the element with id of first

10) Adding and removing classes
// Before we start, look at the source code for example.html and see what the style for class
// exampleclass is

// To add a class use elements.addClass('classname')
english.addClass('exampleclass');

// To remove a class use element.removeClass('classname')
english.removeClass('exampleclass');

// To toggle a class use element.toggleClass('classname')
english.toggleClass('exampleclass'); // run these lines one at a time
english.toggleClass('exampleclass');

// TRY IT
// add the class exampleclass to the body and then remove it

11) Changing css
// You can access the css of an element too
// You use element.css('cssattribute');
var title = $('#title');
console.log(title.css('background-color'));

// You can set the value by adding a second parameter
// element.css('cssattribute', 'newvalue');
title.css('background-color', 'orange');

// TRY IT
// get the value of css 'color' attribute from the paragraph with id of first


12) setInterval
// Not JQuery, but useful for our project
// setInterval is like setTimeout, but it calls a function every time the interval passes 
// unlike setTimeout which runs only once
// setInterval(function, interval_in_milliseconds)
// Example:
// setInterval(hello, 1000);
// The above line will run the hello function every second

function switchClass(){
	// select all paragraphs
	var paragraphs = $('p');
	// toggle their class with example class
	paragraphs.toggleClass('exampleclass');

}

// toggles classes every half second
window.setInterval(switchClass, 500);

13) PROJECT
// We are going to create a constantly changing mosaic picture
// Load JQuery onto the page
// Create a variable named colors and give it an array of 8 colors in string format
//    (you can use https://en.wikipedia.org/wiki/Web_colors to get a list of named colors)
//    if you are lazy, you can use ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'black'] 
// create a variable classes and give it the value of an array of 5 class name, 
//     you can just use 'a', 'b', 'c', 'd', 'e' 
// Create a loop with 5000 iterations
// on each iteration:
//    select a random element from the class array and assign it to the variable random_class (see lesson 7 for how to do this)
//    get the element with id of canvas and assign it to variable canvas
//    append a div using jquery's append method with classes tile and the random_class you selected 
//        (ex <div class='tile a'></div>)
//         **hint to have multiple classes separate with a space
//
// Now create a function called changecolor that takes no parameters
// select a random class from the classes array and assign it to the variable r_class
// select a random color from the color array and assign it to the variable r_color
// select all the elements with the class of the r_class variable and assign them to the c variable using jquery
// set c's css attribut background-color to be the value of r_color using jquery's css method.
//
// run the function changecolor every 300 milliseconds using setInterval



