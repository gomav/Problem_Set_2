// Write a function firstReverse that takes a single string parameter and
// returns the string in reverse order.

// var reverse = function(string){
//   return string.split('').reverse().join('');
// };
// console.log(reverse('over'));
// console.log(reverse('The morning after'));


// Write a function swapCase that takes a single string parameter and swaps the
// case of each character. For example: if a string is "Hello World" the output
// should be "hELLO wORLD". Let numbers and symbols stay the way they are.

// var swapCase = function(swap){
//   newArray = [];
//   for(var i=0; i<swap.length; i++){
//     if(swap[i].toLowerCase() === swap[i]){
//       newArray.push( swap[i].toUpperCase());
//     }else{
//       newArray.push( swap[i].toLowerCase());
//     }
//   }
//   return newArray.join('');
// };
// console.log(swapCase('Hello World'));
// console.log(swapCase('What\'s Going On?'));
// console.log(swapCase('1234567'));


// Bonus: Write a function letterCount that takes a single string parameter and
// returns the first word with the greatest number of repeated letters. For
// example: "Today, is the greatest day ever!" should return greatest because it
// has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
// are no words with repeating letters return -1. Words will be separated by
// single spaces.


var letterCount = function(count){
  newArray = [];
  for(var i=0; i<count.length; i++){
    console.log('qhe');
    if(count[i] === count[i+1]){
      console.log('hey');
      newArray.push( count[i].split(''));
    }
  }
  return newArray.join('');
};
console.log(letterCount('dude! I get it'));
