// Week 4 Coding Project for Dan Koppe

/*---------------Question 1: Create Ages Array--------------*/
// Question 1 Part A:
console.log('----------Question 1 Part A----------')

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length -1] - ages[0]); // Returns value of 90, last element minus first element

//Question 1 Part B:
console.log('----------Question 1 Part B----------')

console.log(ages.push(18)); // Returns a value of 9 because it returns the length of the new array

console.log(ages[ages.length -1] - ages[0]); // Returns a value of 15 because 18 has been added to the end fo the array.

//Question 1 Part C:
console.log('----------Question 1 Part C----------')

let sum = 0; // create new variable to hold value for sum of ages
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];                           /*****why do I have to use + and = here? */ 
} 
let averageAge = sum / ages.length;           //***** is there a way to do this without creating another variable, arrow function? */

console.log(averageAge);  // answer is 27.55 which is the average after we mutated the array when adding 18 previously.


/*---------------Question 2: Create Names Array--------------*/
//Question 2 Part A:
console.log('----------Question 2 Part A----------')

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', "Bob"];

let sumOfLetters = 0;  // new variable to hold value for sum of letters
for (let i = 0; i < names.length; i++) {  // for loop to cycle through names and length
    sumOfLetters += names[i].length;  // 
}
let averageNameLength = sumOfLetters / names.length;  // calculate average with 23 / 6

console.log(averageNameLength);  // Logs out value of 3.83 

//Question 2 Part B:
console.log('----------Question 2 Part B----------')

console.log(names.join(" ")); //*** is this sufficient or do I have to "iterate through the names with a loop again" */

//Question 3:
console.log('----------Question 3----------')

// To access the last element of an array one would use [.length - 1];  For example:

let array1 = [1, 2, 3, 4, 5,]

console.log(array1[array1.length - 1]);  // returns value of 5 by subtracting 1 from the length of the array to access the last element.

//Question 4:
console.log('----------Question 4----------')
// To access the first element in an array one would use 0 since arrays are zero indexed in Javascript.  For example:

console.log(array1[0]); // Will return the number 1 from our question 3 array since that value is at the zero index.

//Question 5:
console.log('----------Question 5----------')

let nameLengths = [];  // create empty array for us to push the new values into

for (let i = 0; i < names.length; i++) { // loop to iterate through the previously created names array
    nameLengths.push(names[i].length);   //*** still having issues visualzing how [i] works with this and why we don't need "return" */
}                                        // [i] as the placeholder for array index?
console.log(nameLengths);  // returns "(6) [3, 5, 3, 5, 4, 3]""  with the (6) being the length of the array and [3, 5, 3, 5, 4, 3] being the length of names.

//Question 6:
console.log('----------Question 6----------')

let sumOfNames = 0 // new variable to hold value for sum of elements in the array
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNames += nameLengths[i];
}
console.log(sumOfNames); // Logs value of 23 which is the sum of the name Lengths.  *** is this right? seems similar to question 2 Part A.

//Question 7:
console.log('----------Question 7----------')

function TwoParam (word, n){
    console.log(word.repeat(n));  //*** is this acceptable or do we have to use a for loop with an empty string for the assignment? */
}
TwoParam("Hello", 3);

// OR

function twoParamLoop (word, n){     // function with Two parameters
    let ParamLoop = '';              // empty string to pass our arguments through
    for (let i = 0; i < n; i++) {    // for loop to cycle through n amount of times
        ParamLoop += word;           //*** still unclear about this step */
    } return ParamLoop;              // return ParamLoop outside of the function or the function will only return one "Hello"
} 
console.log(twoParamLoop('Hello', 3));

//Question 8:
console.log('----------Question 8----------')

function fullName(firstName, lastName){  //function with two parameters
    return firstName + " " + lastName;   //returning the parameters concatenated with a space
}

console.log(fullName("Dan", "Koppe"));   //logging the function with two string values

//Question 9: ????
console.log('----------Question 9----------')

function numbersArrayBoolean(numbers){         //***** is this even correct even though it logs correctly? 
    let sum = 0;                                 // should I be creating a new variable for a blank array and .pushing values?
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    } if (sum < 100) {                          //** should i be using a different method than if/else statements */
        return true;
    } else {
        return false;
    }
}
console.log(numbersArrayBoolean([15, 12, 8, 19]));
console.log(numbersArrayBoolean([56, 28, 94, 16]));

//Question 10: 
console.log('----------Question 10----------')

function numbersArrayAverage(numbers){          //*** is this correct as well? */
    let sum = 0
    for (i = 0; i < numbers.length; i++){
        sum += numbers[i];  
    }                                           //*** Good tip or logic path to know when put thing outside for loop but inside function */
    let sumAverage = (sum / numbers.length);
    return sumAverage;
}
console.log(numbersArrayAverage([15, 12, 8, 19]));  //Returns average of 13.5
console.log(numbersArrayAverage([56, 28, 94, 16])); //Returns average of 48.5

//Question 11: 
console.log('----------Question 11----------')

function twoArrayAverageBoolean(num1, num2){          //****do I use two for loops or a function within the function?
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < num1.length; i++){
        sum1 += num1[i];
    }

    for (let i = 0; i < num2.length; i++){
        sum2 += num2[i];
    }
    let sum1Average = sum1 / num1.length;
    let sum2Average = sum2 / num2.length;

    if (sum1Average > sum2Average){
        return true
    } else {
        return false
    }

}

console.log(twoArrayAverageBoolean([8, 16, 32, 64], [3, 5, 6, 8]))
console.log(twoArrayAverageBoolean([3, 5, 6, 8], [8, 16, 32, 64]))


//Question 12: 
console.log('----------Question 12----------')

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true
    } else {
        return false
    }
}

console.log(willBuyDrink(true, 15))
console.log(willBuyDrink(true, 9))
console.log(willBuyDrink(false, 15))
console.log(willBuyDrink(false, 9))

//Question 13: 
console.log('----------Question 13----------')

function diceRoll() {
    let maxLimit = 20;
    let randomNumber = Math.random() * maxLimit;
    let randomRounded = Math.round(randomNumber);

    if (randomRounded >= 18) {
        return (randomRounded * 1.5) + " Critical Strike!";  
    } else {
        return randomRounded;
    }
}
console.log(diceRoll());




// clone to github?