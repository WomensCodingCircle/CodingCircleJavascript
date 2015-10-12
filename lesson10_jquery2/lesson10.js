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
element.addClass('x') // returns the dom element that was had class added -> element


4) Callback functions
// Many of JQuery's methods can accept as a parameter a call back function to run when the method is complete
// hide() can accept a callback function as a parameter (This is a great place to use anyonmous functions)

5) Events
// Javascript recognizes several event that occure when you are interacting with a webpage in your browser
// click
// mouseover
// keydown
// load



6) Forms

7) Advanced Traversing
