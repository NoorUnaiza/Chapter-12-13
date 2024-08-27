// 1. 

var input = prompt("Please enter a character (a letter or number):");
var ascii = input.charCodeAt(0);
if(ascii >= 65 && ascii <= 90 )
{
    alert("Upper case letter");
}
else if(ascii >= 97 && ascii <= 122 ) {
    alert("Lower case letter");
}
else if(ascii >= 48 && ascii <= 57) {
    alert("Number");
}
else{
    alert("Nothing");
}

// 2.
var number1 = parseInt(prompt("Enter the first number:"));
var number2 = parseInt(prompt("Enter the second number:"));

if(number1 > number2){
    alert("First number is greater than second number.");
}
else if(number1 === number2){
    alert("Both numbers are equal.");
}
else{
    alert("Second number is greater than first number.");
}


// 3. 

var number = parseInt(prompt("Enter a number:"));
if(number > 0 ){
    alert("The number is positive.");
}
else if(number < 0 ){
    alert("The number is negative.");
}
else if(number === 0 ){
    alert("The number is equal.");
}
else{
    alert("Invalid input. Please enter a valid number.");
}

// 4.
 
var character = prompt("Enter a character:");
if(character.length === 1 &&
    (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
   character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U')){
    alert("True");
}
else{
    alert("False");
}

// 5.


var correctPassword = "Ayesha123";
var userPassword = prompt("Please enter your password.");
if(userPassword === ""){
    alert("Please enter your password.");
}
else if(userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password.");
}
else{
    alert("Incorrect password");
}

// 6. 


 var greeting;
 var hour = 13;
 if(hour < 18)
     { greeting = "Good day";}
 else{
     greeting = "Good evening"; }

// 7. 

var timeInput = prompt("Please enter the time in HHMM format (e.g., 1900 for 7 PM):");
var time = parseInt(timeInput, 10);

if (isNaN(time) || time < 0 || time > 2359) {
    alert("Invalid time format. Please enter time in HHMM format.");
}
else if (time >= 0 && time <= 1159) {
    alert("Good Morning.");
}
else if (time >= 1200 && time <= 1659) {
    alert("Good Afternoon.");
}
else if (time >= 1700 && time <= 1959) {
    alert("Good Evening.");
}
else if (time >= 2000 && time <= 2359) {
    alert("Good Night.");
}
else{
    alert("Time input is out of expected range.");
}