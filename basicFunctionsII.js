// 1) CORRECT
// Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
// Example: countdown(5) should return [5,4,3,2,1,0]
function countDown(singleNumberInput) {
    for(i=singleNumberInput; i>0; i--){
        console.log(i);
    }
}
// countDown(5);

// 2) CORRECT
// Print and Return - Create a function that will receive a list (array in js) with two numbers. Print the first value and return the second.
// Example: print_and_return([1,2]) should print 1 and return 2
function printAndReturn(importedArray){
    console.log(importedArray[0]);
    return importedArray[1]
}
// console.log(printAndReturn([1, 2]));

// 3) COMPLETE
// First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
// Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)
function firstPlusLength(inputtedArray){
    var added = inputtedArray[0] + inputtedArray.length;
    console.log(added);
}
// firstPlusLength([1,2,3,4,5]);

// 4) COMPLETE
// Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
// Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
// Example: values_greater_than_second([3]) should return False
function greaterThanSecond(arrayInput){
    var newArray = [] // establishing a new array
    if(arrayInput.length<2){
        return false
    }
    else if(arrayInput.length>2){
        for(i=0; i<arrayInput.length; i++){
            if(arrayInput[i]>arrayInput[1]){ // 1 indicates the second value
                newArray.push(arrayInput[i]) // need push to add to new arrays
            }
        }
        return newArray; // needs to be outside of the for loop for it to work properly
    }
}
// console.log(greaterThanSecond([5,2,3,2,1,4]));
// console.log(greaterThanSecond([3]));

// 5) CORRECT
// This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
// Example: length_and_value(4,7) should return [7,7,7,7]
// Example: length_and_value(6,2) should return [2,2,2,2,2,2]
function lengthValue(input1, input2){
    var newArray = [];
    for(i=0; i<input1; i++){
        newArray.push(input2);
    }
    return newArray;
}
// console.log(lengthValue(4,7));
// console.log(lengthValue(6,2));