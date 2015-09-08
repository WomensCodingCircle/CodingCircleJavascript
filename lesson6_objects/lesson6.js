1) Open Chrome

2) Open the console
Menu -> more tools -> javascript console

3) Objects
// Javascript objects are very versitile. At their core, they are a collection of key-value pairs.
// An object is created using curly braces {} and key : value pairs separated by a colon and commas ,
// var obj = {
//	 key: value,
//	 key2: value2
// };

var venus = {
	color : 'yellow',
	type : 'terrestrial',
	rings: false, 
};
console.log(venus);

// You can also have an empty object
var empty = {};
console.log(empty);

// the type of objects are object
console.log(typeof(venus));

4) Accessing Object Properties
// The key value pairs are called properties of an object. You can access them two ways
// Either using dot notation object.property
// Or using the same way you would access an element in an array (except using the name word 
//	instead of a number index): object['property']

var mars = {
	color: 'red',
	type: 'terrestrial',
	rings: false,
};

var mars_color = mars.color;
console.log(mars_color);

var is_mars_married = mars['rings'];
console.log(is_mars_married);

// You can use the properties of an object the same way you would use their values
if (mars.type == 'terrestrial') {
	console.log("Maybe we can visit one day.");
}
else {
	console.log("Probably not in my lifetime...");
}

// There is no difference in using dot notation or array notation when accessing a
// property. The standard is to use the dot notation if you can.
if (mars.color === mars['color']) {
	console.log("I can use dot notation or array notation");
}

// You can even use variables to access a property (in this case you need to use array notation)
var bling = 'rings';
console.log("Venus has rings: ", venus[bling]);
console.log("Mars has rings: ", mars[bling]);

5) Object methods
// You can actually use functions as the values in an object (remeber functions are first class in javascript)
// When a function is the value of a key value pair, the function is called a method
// A function declared in an object is declared with out a name
// function() { 
//   code to run 
// }
// compare that to a function declared outside of an object
// function name() { 
//   code to run 
// }

var jupiter = {
	color: 'stripy',
	type: 'gas giant',
	rings: true,
	storm: function() {
		console.log("still spinning");
		return true;
	},
}


6) Accessing Object Methods
// You can access an object method using the dot notation with parenthesis after it
// object.method() 
// If the function takes parameters, you put them inside the parenthesis

var does_jupiter_have_a_storm = jupiter.storm();
console.log(does_jupiter_have_a_storm);

// with a parameter
// First define a method that takes a parameter
var combiner = {
	combine: function (a, b){
		return a + b;
	},
}

var string_combined = combiner.combine('blue', 'berry');
console.log(string_combined);

var number_combined = combiner.combine(3, 4);
console.log(number_combined);

// If you call it without the parenthesis, you just get the function
console.log(jupiter.storm);


7) Using new and this to create objects
// You can create many of the same type of object if you write a function to generate these objects
// To access the object that you are creating in your function, you use the special 'this' keyword
function planet(color, gas_giant, rings) {
	// We use this to refer to the object we are creating
	// This line sets the object's color property to the value supplied in the parameter
	this.color = color;
	// We don't have to automatically assign properties from the parameters
	// In this case if the parameter gas_giant is true, we set the value to 'gas giant'
	if (gas_giant){
		this.type = 'gas giant';
	}
	else {
		this.type = 'terrestrial';
	}
	this.rings = rings;
}

// To create an object using your function, you use the special new keyword
var saturn = new planet('tan', true, true);
document.write("Saturn is a " + saturn.type + " that is colored " + saturn.color);

8) Project
// We are going to create an acrostic poem generator
// The user will enter their name an you will display an acrostic poem for their name
// http://www.acrosticpoem.org/
// Example of an acrostic poem:
// O - Outstanding
// B - Beautiful
// J - Jolly
// E - Erudite
// C - Caring
// T - Tall
//
// Prompt the user for their name and store it in a variable called name
// convert name to uppercase and store it in a variable called capital_name
// Create an object called acrostic that has each uppercase letter of the alphabet as keys and 
//   a adjective staring with that letter as the value.
// You can use this site to help you think of adjectives http://www.enchantedlearning.com/wordlist/adjectives.shtml
// split capital_name into an array of its letters and store in a variable called name_letters *hint use strings split method
// for each letter in name_letters :
//      get the adjective corresponding to the letter from the acrostic dictionary
//      Write to the document <p>letter: adjective</p>  // make sure you use the paragraphs so that the name will be vertical
// ** Challenge
// make a method in acrostic called generate that takes a name as a parameter, and use this to generate the acrostic instead
// just make sure to call acrostic.generate(name_letters);
// 



