1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) BOM
// The Browser Object Model (BOM) let's you interact with the browser
// using javascript

// window is an object that represents a browsers window, it is also the parent of 
// all global javascript variables and functions.
// (This means that almost everything we've learned so far can be prefixed with window)
// ex. window.prompt();

// You can use the window object to get the size of the browser window in pixels
var winHeight = window.innerHeight; // for height
var winWidth = window.innerWidth // for width
console.log("Height: " + winHeight + " Width: " + winWidth);

// TRY IT
// Resize your browser and get the height of the window

4) screen
// Screen is the size of the user's monitor screen. Use this to tell what screen resolution a user is using, 
// This has nothing to do with the browser.
// Can also be written window.screen

// Width and height
var screenWidth = screen.width;
var screenHeight = screen.height;
if ((screenWidth/screenHeight) >=  1.34) {
	document.write("You have a widescreen monitor");
}
else {
	document.write("Maybe you should splurge on a widescreen monitor on black friday?");
}

// Color depth is how many bits to determine a color
// 32 Very high, 24 normal, 16 low, 8 ugh!
var colorDepth = screen.colorDepth;
if (colorDepth > 16) {
	document.write("You're monitor can show colors well.");
}
else {
	document.write("Are you from the 90's? Time to buy a new monitor.");
}

// Try it
// log your screen resolution to the console

5) location
// the location object tells you about the url
// Can also be written window.location

// Getting the url: location.href
console.log(location.href);

//setting the url location.href = new_url
// make sure to include http:// sometimes it will work without, but better safe than sorry
location.href = "http://www.womenscodingcircle.com/";

//TRY IT
// Go to a bookmarked webpage and log the url to the console.

6) cookies
// What is a cookie
// A cookie is information that a website stores about you in your browser using your own disk space
// It allows a website to remember information about you, like whether you are logged in, what 
// is in your cart etc.

// The cookies associated with a specific url are sent to the webserver along so that the server can retrieve
// the data it saved about you.

// Cookies are associated with specific web pages

// Cookies contain thier data in a key->value store


// creating a cookie
// document.cookie = "key=value, key2=value2";
document.cookie = "gender=female";

//The cookie is deleted when the browser is closed unless you add and expiration date
// too add experiation date, end your key-values with a ; and add "expires=Tue, 3 Nov 2015 13:00:00 UTC" 
// to the end of the cookie string, fill in your own UTC date/time
document.cookie = "codingSkills=awesome; expires=Thu, 3 Nov 2016 13:00:00 UTC"; //Hopefully, they'll be legandary next year

// Getting a cookie
var myCookie = document.cookie;
// Then you need to parse the string to get the values

// Deleting a cookie
// To delete one key: value
// document.cookie = 'key='
document.cookie = 'gender=';

// To delete the whole thing set the expiration date to sometime in the past
document.cookie = 'expires=Mon, 2 Nov 2015 01:00:00 UTC'; 


7) Project
// Box Clicker, a website that counts how many times you click a box and if you come back to the 
// page (for some reason...) it tell you how many times you clicked the box before

// I've included jquery and also included a function already that allows 
// you to get the value of a cookie given a key
// value = getCookie(key)
// A small note, cookies don't work for local files on chrome so try a different browser for the 
// cookie portion (or put the file on a webhost for Mac: https://discussions.apple.com/docs/DOC-3083 )

// Check if a cookie has been set for key 'prev_score'
//    if so get the value and store in a variable called prev_score
//    set the inner html of the element with id of prev_score to be the value of the variable prev_score
// Create a variable called click_count and set it equal to 0
// Store the value of the window's innerWidth to a variable called window_width
// Calculate the offset for the box to center it by taking half the window_width - half the width of the box
// and store it in a variable called margin-val
// Set the box's margin-left css property to be equal to margin-val
// Set the box to perform a function called boxClick, when clicked

// Write the boxClick function to 
// increment click_count 
// fill in the score inner html with click_count
// write a cookie with key of 'prev_score' and value of click_count to expire on 'Thu, 3 Nov 2016 13:00:00 UTC'

// play the game!