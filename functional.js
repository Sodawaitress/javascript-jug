let states = ["Kancers", "Nebra", "North bear", "South bear"];

// Kancers -> Kancers
// North bera -> north-bera

function urlify(string) {
   return string.toLowerCase().split(/\s+/).join("-")
} 
//urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element){
        urls.push(urlify(element))
    });
    return urls;
}
console.log(imperativeUrls(states));


function functionalUrls(elements) {
    return elements.map(element => element.toLowerCase().split(/\s+/).join("-"));
}
console.log(functionalUrls(states));

function stateUrls(states) {

    return states.map(state => `https://example.com/${urlify(state)}`);
}
console.log(stateUrls(states));
        
 // singles: Imperative version
 function imperativeSingles(elements){
    let singles = [];
    elements.forEach(function(elements){
        if (elements.split(/\s+/).length === 1){
            singles.push(elements);
        }
    });
    return singles;
 }
 console.log(imperativeSingles(states));


 function imperativeSingles(elements){
    return elements.filter(elements => elements.split(/\s+/).length === 1)
 
}
console.log(imperativeSingles(states));

function bearUrls(element){
return states.filter(element => element.includes("bear"))
}
console.log(bearUrls(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // sum: Imperative solution
function imperativeSum(elements) {
 let total = 0;
 elements.forEach(function(n){
    total += n;
 });
 return total
}
console.log(imperativeSum(numbers));

 // sum: Functional solution
function FunctionalSum(elements) {
    return elements.reduce((total,n) => {return total += n; });
}
console.log(FunctionalSum(numbers));

function FunctionalProduct(elements) {
    return elements.reduce((total,n) => {return total *= n; 1});
}
console.log(FunctionalProduct(numbers));


// lengths: Imperative solution
function imperativeLengths(elements) {
 let lengths = {};
 elements.forEach(function(element){
    lengths[element] = element.length;
 })
 return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths,element) =>{
         lengths[element] = element.length;
         return lengths;
    },{});
}
console.log(functionalLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length;return lengths;}, {});
}
console.log(functionalLengths(states));