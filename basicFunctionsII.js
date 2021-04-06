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

// For Loop Basic II

// 1)
// Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
// Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]


// 2)
// Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
// Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
// Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it


// 3) 
// Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
// Example: sum_total([1,2,3,4]) should return 10
// Example: sum_total([6,3,-2]) should return 7


// 4)
// Average - Create a function that takes a list and returns the average of all the values.x
// Example: average([1,2,3,4]) should return 2.5


// 5)
// Length - Create a function that takes a list and returns the length of the list.
// Example: length([37,2,1,-9]) should return 4
// Example: length([]) should return 0


// 6)
// Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
// Example: minimum([37,2,1,-9]) should return -9
// Example: minimum([]) should return False


// 7)
// Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
// Example: maximum([37,2,1,-9]) should return 37
// Example: maximum([]) should return False


// 8)
// Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
// Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }


// 9)
// Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
// Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]


