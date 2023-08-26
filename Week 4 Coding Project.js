// Week 4 Coding Project for Dan Koppe

/*---------------Question 1: Create Ages Array--------------*/
// Question 1 Part A:
console.log('----------Question 1 Part A----------')

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //using [] we can create an array when declaring the variable

console.log(ages[ages.length -1] - ages[0]); // logs value of 90, last element minus first element.
                                           // using zero indexing we access the last element with .length -1 and the first element with 0

//Question 1 Part B:
console.log('----------Question 1 Part B----------')

console.log(ages.push(18)); // Add new value to the array with .push method. logs a value of 9 because it logs the length of the new array

console.log(ages[ages.length -1] - ages[0]); // logs a value of 15 because 18 has been added to the end fo the array.

//Question 1 Part C:
console.log('----------Question 1 Part C----------')

let sum = 0; // create new variable to hold value for sum of ages
for (let i = 0; i < ages.length; i++) {  // for loop to loop through the array
    sum += ages[i];                           // adds the values of the array
} 
let averageAge = sum / ages.length;           // new variable that divides for loop sum by the array length

console.log(averageAge);  // answer is 27.55 which is the average after we mutated the array when adding 18.


/*---------------Question 2: Create Names Array--------------*/
//Question 2 Part A:
console.log('----------Question 2 Part A----------')

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', "Bob"]; // new array using "" to make the values a string

let sumOfLetters = 0;  // new variable to hold value for sum of letters
for (let i = 0; i < names.length; i++) {  // for loop to cycle through names and length
    sumOfLetters += names[i].length;  // [i].length used to get the length of the string
}
let averageNameLength = sumOfLetters / names.length;  // calculate average with 23 / 6

console.log(averageNameLength);  // Logs out value of 3.83 

//Question 2 Part B:
console.log('----------Question 2 Part B----------')

console.log(names.join(" ")); //using the .join method with " " for spaces in place of a for loop

//Question 3:
console.log('----------Question 3----------')

// To access the last element of an array one would use [.length - 1];  For example:

let array1 = [1, 2, 3, 4, 5,]

console.log(array1[array1.length - 1]);  // logs value of 5 by subtracting 1 from the length of the array to access the last element.

//Question 4:
console.log('----------Question 4----------')
// To access the first element in an array one would use 0 since arrays are zero indexed in Javascript.  For example:

console.log(array1[0]); // Will return the number 1 from our question 3 array since that value is at the zero index.

//Question 5:
console.log('----------Question 5----------')

let nameLengths = [];  // create empty array for us to .push the new values into

for (let i = 0; i < names.length; i++) { // loop to iterate through the previously created names array
    nameLengths.push(names[i].length);   // use the .push(names[i].length) to push new length values from our previous names array into our new empty array
}                                        
console.log(nameLengths);  // logs "(6) [3, 5, 3, 5, 4, 3]""  with the (6) being the length of the array and [3, 5, 3, 5, 4, 3] being the length of names.

//Question 6:
console.log('----------Question 6----------')

let sumOfNames = 0                              // new variable to hold value for sum of elements in the array
for (let i = 0; i < nameLengths.length; i++) {  //for loop to cycle through array
    sumOfNames += nameLengths[i];              // add name lengths to our name sum variable
}
console.log(sumOfNames);                      // Logs value of 23 which is the sum of the name Lengths.

//Question 7:
console.log('----------Question 7----------')

function TwoParam (word, n){      //function with two parameters
    console.log(word.repeat(n));  // use the .repeat method to repeat the first parameter word, n amount of times
}
TwoParam("Hello", 3);             //logs HelloHelloHello

// OR

function twoParamLoop (word, n){     // function with Two parameters
    let ParamLoop = '';              // empty string to pass our arguments through
    for (let i = 0; i < n; i++) {    // for loop to cycle through n amount of times
        ParamLoop += word;           // add word values to empty variable
    } return ParamLoop;              // return ParamLoop outside of the for loop or the function will only return one "Hello"
} 
console.log(twoParamLoop('Hello', 3));  // logs HelloHelloHello

//Question 8:
console.log('----------Question 8----------')

function fullName(firstName, lastName){  //function with two parameters
    return firstName + " " + lastName;   //returning the parameters concatenated with a space
}

console.log(fullName("Dan", "Koppe"));   //logging the function with two string values

//Question 9: 
console.log('----------Question 9----------')

function numbersArrayBoolean(numbers){            // new function with one parameter
    let sum = 0;                                  // new variable to hold sum value
    for (let i = 0; i < numbers.length; i++){     // for loop to cycle through parameter length
        sum += numbers[i];                        // adding values from our for loop to our sum
    } if (sum < 100) {                            // if/else statement to log true or false
        return true;
    } else {
        return false;
    }
}
console.log(numbersArrayBoolean([15, 12, 8, 19]));  // logs true
console.log(numbersArrayBoolean([56, 28, 94, 16])); // logs false

//Question 10: 
console.log('----------Question 10----------')

function numbersArrayAverage(numbers){          // new function with one parameter
    let sum = 0                                 // new variable to hold sum value
    for (i = 0; i < numbers.length; i++){       // for loop to cycle through parameter length
        sum += numbers[i];                      // adding values from our for loop to our sum
    }                                            
    let sumAverage = (sum / numbers.length);    // new variable that holds calculated average
    return sumAverage;                          // return statement that returns average
}
console.log(numbersArrayAverage([15, 12, 8, 19]));  //Returns average of 13.5
console.log(numbersArrayAverage([56, 28, 94, 16])); //Returns average of 48.5

//Question 11: 
console.log('----------Question 11----------')

const twoArrayAverageBoolean = (num1, num2) => {   // used const and => to create an arrow function
    let sum1 = 0                                   // variable for sum of parameter 1            
    let sum2 = 0                                   // variable for sum of parameter 2
    for (let i = 0; i < num1.length; i++){         // for loop for param 1
        sum1 += num1[i];
    }

    for (let i = 0; i < num2.length; i++){         // for loop for param 2
        sum2 += num2[i];
    }
    let sum1Average = sum1 / num1.length;          // variable for calculated average sum 1
    let sum2Average = sum2 / num2.length;          // variable for calculated average sum 2

    if (sum1Average > sum2Average){                // if/ else statement to return true or false using > comparison
        return true
    } else {
        return false
    }

}


console.log(twoArrayAverageBoolean([8, 16, 32, 64], [3, 5, 6, 8])) // logs true
console.log(twoArrayAverageBoolean([3, 5, 6, 8], [8, 16, 32, 64])) // logs false


//Question 12: 
console.log('----------Question 12----------')

function willBuyDrink(isHotOutside, moneyInPocket){         // function with two parameters
    if (isHotOutside === true && moneyInPocket > 10.50){    // if statement that must have a true statement AND a number value greater than 10.50
        return true                                         // return true if both if statements pass
    } else {
        return false                                        // else statement if one or more if statements are false
    }
}

console.log(willBuyDrink(true, 15))  // logs true
console.log(willBuyDrink(true, 9))   // logs false
console.log(willBuyDrink(false, 15)) // logs false
console.log(willBuyDrink(false, 9))  // logs false

//Question 13: 
console.log('----------Question 13----------')

function diceRoll() {                                           //function with no arguments
    let maxLimit = 20;                                          //since we want to represent a 20 sided die we have to declare a max limit value since the Math.random function only returns numbers between 0-1.
    let randomNumber = Math.random() * maxLimit;                //new variable multiplying math.random * 20 to represent 20 sided die.
    let randomRounded = Math.round(randomNumber);               //Useing Math.round to round our random number to the nearest whole number

    if (randomRounded >= 18) {                                  //Using an if/else statement to add a little spicy critical strike chance!
        return (randomRounded * 1.5) + " Critical Strike!";  
    } else {
        return randomRounded;
    }
}
console.log(diceRoll()); // logs a random round 1-20 number unless number is 18 or higher in which case it logs the number * 1.5 + " Critical Strike!"




// don't forget to upload to Github and make sure to clone and run it!