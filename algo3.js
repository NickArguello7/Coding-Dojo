let countPositives = 0;
let numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!

// How do we check if it's positive? 
// We can check if the values are greater than 0. 

// We'll need a loop to go through the array.
// We'll need a conditional to check the value for if it's positive.


function checkpositives(numbers){
var positives=[]
for(var i=0; i<numbers.length; i++)
if(numbers[i]>0)
count countPositives++;
}
{
return positive; 
} 
countPositives= checkpositives(numbers);



console.log("there are " + countPositives + " positive values");


/*

Bonus Challenge: 
Level 1: Write this as a function that accepts arrays as parameters.
Level 2: Include a return statement that gives back the counted positive numbers.
Level 3: Instead of returning the count, return a new array of only the positive numbers.