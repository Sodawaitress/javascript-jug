let Phrase = require("mermaid-palindrome");

let string = prompt("Please enter a string for palindeome testing:")
let phrase = new Phrase(string);
if(phrase.palindrome()){
    alert(`"${phrase.content}" is a palindrome!`)
} else {
    alert(`"${phrase.content}" is a not palindrome!`)
}

