function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();

// What will the console.log state when this function is called? "I was born in 1980"

function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);

//If this function is called with the argument 1980, what would the console.log state?  "I was born in 1980" its the same as the last problem just in a diffrent format

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);

//: Let's try it again. If var num1 = 10 and var num2 = 20, what would the various console.logs state? Number 1 is 10, number 2 is 20