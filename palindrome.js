String.prototype.reverse = function reverse(){
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.

 
   this.processor = function(string) {
    return string.toLowerCase();
};

   this.processedContent = function(){
    return this.processor(this.content);
   }
   
   this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse()

   }
}

String.prototype.blank = function blank(){
    return /^\s*$/.test(this);
}



