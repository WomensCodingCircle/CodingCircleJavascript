1) Open example.html in Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Chaining
// JQuery methods can be chained together
$('#mermaid').hide()
// OR
$('#mermaid').show().addClass("pretty").append("She is very beautify and deadly.");

// This is because each jquery method operates on a dom element, as well as returns a dom element
var element = $('#mermaid') // returns a dom element with id of id

element.show() // returns the dom element that was shown -> element
element.addClass('pretty') // returns the dom element that  had class added -> element
element.append("She is very beautify and deadly.") // returns the dom element that had content appended -> element

// It is a little difficult to read all in a line, though so best practice is to make a new indented line for each chained method:
$('#mermaid')
	.show()
	.addClass("pretty")
	.append("She is very beautify and deadly.");

// TRY IT
// Select and hide the ghost element all in one line

4) Callback functions
// Many of JQuery's methods can accept as a parameter a call back function to run when the method is complete
// show() and hide() can accept a callback function as a parameter (This is a great place to use anyonmous functions)
// Then when hide is finished, the callback function runs


function afterHide() {
	$('body').prepend("I've hidden something, you'll never find it.");
};
// After the element is hidden, afterHide function is run
$('#mummy').hide(afterHide);

// Alternatively we can use an anynomous functions
// This is a better option if the function is very simple and will only be run
// by the callback (you won't be able to reuse it)
$('#mummy').show(function(){
	$('body').prepend("Oh, you found it after all.<br>");
});

// TRY IT
// Call show on the ghost element and use a call back function to log "Boo" to the console

5) Events
// Javascript recognizes several event that occur when you are interacting with a webpage in your browser
// click - when user clicks element
// mouseover - when users mouse is over top the element
// keydown - when the user presses a key
// load - when the object loads
// Here is the complete list http://www.w3schools.com/jsref/dom_obj_event.asp

// We can use JQuery to detect these events and fire callback functions when they happen (the callback functions are called event handlers)
// Usually we detect the event relative to an element, but some can be for the body or document.
// element.on('event', callback);
// OR
// element.event(callback);  ex. $('#first').click(function(){console.log("here i am");};

function afterClick(){
	console.log("you clicked it");
}

$('#creature_button').on('click', afterClick);
// Click the button now


// Using anynomous functions	
$('#creature_button').on('click', function(){
	console.log("You definitely clicked it.");
});
// Click the button again. (Why 2 messages? both event handlers are active)


// If you want to remove event handler, use the off method
// element.off('event_name');
$('#creature_button').off('click');


// Using the click method
$('#creature_button').click(afterClick);
// click the button


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
// You must name it in the parameters, (e is the standard name, but I'll use theEvent for clarity)
// You can use the event object to find what was clicked and where the click occured.
$('#ghost').mouseover(function(theEvent){
	console.log(theEvent);
});

// This 
// this refers to the element that fired the event
// It is automatically available, you don't have to name it in the parameters to the function
$('#mermaid').mouseover(function(){
	console.log(this);
});

// To turn this into a jquery element that you can use wrap it in $(): $(this)
$('#mermaid').mouseover(function(){
	$(this).hide();
});

// TRY IT
// log 'clicked on name' to the console when you click on the element with id of name

6) Forms
// You can use jquery to intereact with HTML forms.

// Getting value of form
// element.val();
$('#name').val();
// Now write something in the creature name input and run this line again.

// Setting a value in a form
// element.val('new value');
$('#name').val('centaur');

// submitting forms
// form.submit()
$("#creature_form").submit(); // Doesn't do anything because we don't have html to tell the form what to do when you submit

// pressing buttons
// button.click()
$('#creature_button').click();


// Attributes
// You can get or set attributes for the form (or any html element, actually)
// Getting an attributes value: element.attr('name')
// Setting an attribute's value: element.attr('name', 'value')

// Getting value for type attribute
$('#creature_button').attr('type');

// Changes a button to a text box. 
$('#creature_button').attr('type', 'text');

// TRY IT
// Get the value of the element with id of description (type something in that text box first)

7) Putting it all together
// We will use JQuery and events to make the form add creatures to the creature list
// Refresh the page

// We add an event handler when you click the button to get the values of the form and append them to the creature div
$('#creature_button').on('click', function(){
	// Get what the user entered in the name and value fields
	var name = $("#name").val();
	var description = $('#description').val();
	// If they enetered at least a name, add it to the list of creatures (all contained in the div with id of creatures)
	if (name != '') {
		$('#creatures').append("<div id='" + name + "'>" )
					.append("<h2>" + name + "</h2>")
					.append("<p>" + description + "</p>")
					.append("</div>");
	};
	// clear the form elements so you can add more creatures
	$('#name').val('');
	$('#description').val('');
});

// Now add a creature to the form element and click the button.

8) More
// There is more to JQuery than two lessons can cover, but you can look it up on your own. Here is a taste
// Animation effects element.fadeIn()
// Ajax $.ajax()
// Advanced DOM Traversal element.siblings()
// Array Operations $.map()
// Go here to learn more: https://jquery.com/

9) Project
// You will create a restaurant app that a user enters their order and when they are finished asks them if that is ok.

// Write a click handler if a user clicks on anything with the class of item
//   The function for the item click handler should get the id of the element clicked and save to variable id
//          (use this, transform into jquery element and get the value of the attribute id)
//   Append the value of id to the element with id of order and then append a break


// Now write a click handler if a user clicks on menu_submit
//   The function for the menu submit click handler should get the text from the element with id of order 
//       (use jquery's .text() method)
//   Confirm that the user's order is correct  and store in a variable called ok
//   If the user clicks ok, fill in the element with id of message with 'Enjoy!'
//   Otherwise fill in the element with id of message with 'Oh, sorry, try again.'
//   Replace the text of order with an empty string.

// Now try ordering your breakfast

