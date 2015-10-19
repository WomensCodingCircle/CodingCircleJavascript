1) Open example.html in Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Chaining
// JQuery methods can be chained together
$('#id').hide()
// OR
$('#id').show().addClass("x").append("abcde");

// This is because each jquery method operates on a dom element, as well as returns a dom element
var element = $('#id') // returns a dom element with id of id

element.show() // returns the dom element that was shown -> element
element.addClass('x') // returns the dom element that  had class added -> element
element.append("abcde") // returns the dom element that had content appended -> element

// It is a little difficult to read all in a line, though so best practice is to make a new indented line for each chained method:
$('#id')
	.show()
	.addClass("x")
	.append("abcde");

4) Callback functions
// Many of JQuery's methods can accept as a parameter a call back function to run when the method is complete
// hide() can accept a callback function as a parameter (This is a great place to use anyonmous functions)
// Then when hide is finished, the callback function runs


function afterHide() {
	alert("here i am");
};
// After the element is hidden, afterHide function is run
$('#id').hide(afterHide);

// Alternatively we can use an anynomous functions
// This is a better option if the function is very simple and will only be run
// by the callback (you won't be able to reuse it)
$('#id').hide(function(){
	alert("here I am!");
});

5) Events
// Javascript recognizes several event that occur when you are interacting with a webpage in your browser
// click - when user clicks element
// mouseover - when users mouse is over top the element
// keydown - when the user presses a key
// load - when the object loads
// Here is the complete list http://www.w3schools.com/jsref/dom_obj_event.asp

// We can use JQuery to detect these events and fire callback functions when they happen
// Usually we detect the event relative to an element, but some can be for the body or document.
// element.on('event', callback);
// OR
// element.event(callback);  ex. $('#first').click(function(){console.log("here i am");})

function afterClick(){
	console.log("clicked");
}
$('#id').on('click', afterClick);

// Using anynomous functions	
$('#id').on('click', function(){
	console.log("clicked");
})

// Using the click method
$('#id').click(afterClick);

// Document Ready
// One of the most common events to detect is the document.ready function
$('document').ready(function(){
		// Put the main logic of your page. This will make sure you code only runs after all the elements of the page loads
});

// It is so useful, that it has a shortcut $(callback);
$(function(){
	// code runs when document is ready.
});

// Parameters to callback function
// When an event fires you can access the 'Event' object through the function
// You must name it in the parameters, (e is the standard name)
// You can use the event object to find what was clicked and where the click occured.
$('#id').mouseover(function(theEvent){
	console.log(theEvent);
});

// This 
// this refers to the element that fired the event
$('#id').mouseover(function(){
	console.log(this);
});

// Ust this like you would any element
$('#id').mouseover(function(){
	this.hide();
});

6) Forms
// You can use jquery to intereact with HTML forms.

// Getting value of form
// element.val();

// element.val('new value');

// submitting forms
form.submit()
// pressing buttons
button.click()

//attributes
element.attr('name')
element.attr('name', 'value')

7) More
// There is more to JQuery than two lessons can cover, but you can look it up on your own. Here is a taste
// Animation effects element.fadeIn()
// Ajax $.ajax()
// Advanced DOM Traversal element.siblings()
// Array Operations $.map()



