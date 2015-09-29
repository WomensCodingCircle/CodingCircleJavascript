1) Project
// It is time to take a break from lessons and apply what you know.
// You will be creating a website that lets you play hangwoman (it's just hangman with a female avatar)
// This will be a little more complicated than the rest of the end of lesson projects
// but you're up to it. You have all of the skills that you need.


// First you will create two functions to help with playing hangman

// The first function will be named guessedLetter and will take a letter 'l' and an 
// array of guessed letters 'guessed' as parameters
// loop through guessed, if l equals that letter return 1 ** hint use the lowercase versions of both
// after the loop return 0 ** this will only happen if the letter doesn't match guessed

// The second function will be called letterInWord and will take a letter 'l' and a word 'word' as parameters
// First split the word into characters and store in a variable called split_word
// Loop through each character in split_word. If l equals that letter return true. ** hint again, use the lowercase 
// version of both letters
// after the loop return false

// Create an array called word_bank that contains several words or phrases you can play hangwoman with.
// Create an array called woman that contains an text representation of the woman at every stage of hangwoman
/*
var woman = [ 
" |---|<br>\
     |<br>\
     |<br>\
     |<br>\
     |<br>\
  ________",

" |---|<br>\
  O  |<br>\
     |<br>\
     |<br>\
     |<br>\
  ________",

" |---|<br>\
  Ol |<br>\
     |<br>\
     |<br>\
     |<br>\
  ________",
" |---|<br>\
  Ol |<br>\
  |  |<br>\
     |<br>\
     |<br>\
  ________",
" |---|<br>\
  Ol |<br>\
 -|  |<br>\
     |<br>\
     |<br>\
  ________",
" |---|<br>\
  Ol |<br>\
 -|- |<br>\
     |<br>\
     |<br>\
  ________",
" |---|<br>\
  Ol |<br>\
 -|- |<br>\
 /   |<br>\
     |<br>\
  ________",
" |---|<br>\
  Ol |<br>\
 -|- |<br>\
 / \\ |<br>\
     |<br>\
  ________",
]
*/

// Create a variable called guessed_letters that contains an empty array
// Create a variable called num_wrong_guess that is equal to 0
// Create a variable called word_choice with a random choice from the word_bank array *hint: use Math.random()
// Create a variable called result with value of "Sorry, you lose!"
// Start a while loop where the condition is that num_wrong_guesses is less than length of woman array
// Lay out the gallows:
//    fill the html for the element with id of gallows with the element from the woman array with the index of num_wrong_guess
// Figure out what the word to be printed on the screen (including blanks). At the same time we will
// calculate if the user has guessed all the letters in the word
//   split the word into characters and store in a variable called split_word
//   create a variable called word_to_print which contains an empty string
//   create a variable called num_correct_letters equal to 0 
//   for each letter in split_word
//       use the guessedLetter function you wrote to check if that letter is in the guessed_letters array
//       if it is add that letter to word_to_print string and add 1 to num_correct letters
//       else if the letter is a space add that letter to word_to_print string and add 1 to num_correct letters
//       otherwise add an underscore to word_to_print (this counts as a blank) ** you may want to add a space after
//         your letters/underscores to make it more stylish
// Fill in the html for the element with id of word with the value of word_to_print
// If they got the word correct (word_choice's length is equal to num_correct_letters)
//   set result to be "Yay you guessed it!"
//   break out of the while loop, they are done
// Finally, we prompt the user for a letter and sore it in a variable called guess
// Use the function letterInWord to check if their guess is in word_choice.
// If not, add 1 to num_wrong_guesses
// Add their guess to guessed_letters array
// Close your while loop
// Now they are done playing and either won or lost, either way fill in the html of the elemement with the id
// of word with the word_choice
// Fill in the html of the element with id of result with result.
// You're done!
