let a = ["ant", "bat", "cat", 42];
a.forEach(function(element){
  console.log(element);
});

a.forEach((element) => {
    console.log(element);
})

let soliloquy = "To be, or not to be, that is the question.";
for (let i =0; i < soliloquy.length; i++){
    console.log(spliloquy.charAt[i]);
}
Array.from(soliloquy).forEach(function(character){
    console.log(character);
});


Array.from(a).forEach(function(element){
 console.log(element);
})