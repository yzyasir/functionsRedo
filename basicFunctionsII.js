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









// FOR BASIC LOOP II
// 1) CORRECT
// Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
// Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
function biggestSize(arrayPrime){
    var newArray = [];
    for (i=0; i<arrayPrime.length; i++){
        if(arrayPrime[i] <= 0){
            newArray.push(arrayPrime[i]);
        }
        else{
            newArray[i]=("big");
        }
    }
    return newArray;
}
// console.log(biggestSize([-1, 3, 5, -5]))

// 2) Stuck
// Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
// Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
// Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
function countPositives(arrayInput){
    var counter = 0;
    var newArray = [];
    for(i=0; i<arrayInput.length; i++){
        if(arrayInput[i]>0){
            counter ++;
            newArray.push(arrayInput[i]);

        }
    }
}
// console.log(countPositives([-1,1,1,1]))

// 3) CORRECT
// Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
// Example: sum_total([1,2,3,4]) should return 10
// Example: sum_total([6,3,-2]) should return 7
function total(input){
    var totalSum = 0;
    for (i=0; i<input.length; i++){
        console.log(input[i])
        totalSum += input[i]; // To add, its not +, it is +=
        console.log(totalSum)
    }
    return totalSum;
}
// console.log(total([5, 2, 7]));

// 4) CORRECT
// Average - Create a function that takes a list and returns the average of all the values.
// Example: average([1,2,3,4]) should return 2.5
function averageMaker(arrayInput){
    var sum = 0;
    var average;
    // console.log(arrayInput.length)
    for(i=0; i<arrayInput.length; i++){
        sum += arrayInput[i];
    }
    // console.log(sum)
    average = sum / arrayInput.length; //% is just finding the remainder
    return average
}
// console.log(averageMaker([1,2,3,4]));

// 5) CORRECT
// Length - Create a function that takes a list and returns the length of the list. 
// Example: length([37,2,1,-9]) should return 4
// Example: length([]) should return 0
function lengthCount(arrayInput){
    return arrayInput.length;
}
// console.log(lengthCount([37,2,1,-9]))

// 6) Completed but fix the second half
// Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
// Example: minimum([37,2,1,-9]) should return -9
// Example: minimum([]) should return False
function minimum(arrayInput){
    var minValue = arrayInput[0];
    // console.log(arrayInput.length);
    for(i=0; i<arrayInput.length; i++){
        if(arrayInput[0] = undefined){
            console.log("False")
        }
        else if(arrayInput[i] <= minValue){
            minValue = arrayInput[i]
            // console.log(minValue);
        }
    }
    return minValue;
}
// console.log(minimum([37,2,1,-9]));
// console.log(minimum([]));

// 7) Completed but fix the second half
// Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
// Example: maximum([37,2,1,-9]) should return 37
// Example: maximum([]) should return False
function maximum(arrayInput){
    var maxValue = arrayInput[0];
    // console.log(arrayInput.length);
    for(i=0; i<arrayInput.length; i++){
        if(arrayInput[0] = undefined){
            console.log("False")
        }
        else if(arrayInput[i] >= maxValue){
            maxValue = arrayInput[i]
            // console.log(minValue);
        }
    }
    return maxValue;
}
// console.log(maximum([37,2,1,-9]));
// console.log(maximum([]));

// 8) Complete
// Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
// Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 } 
function ultAnalysis(arrayInput){
    var length = arrayInput.length;
    var sumTotal = 0;
    var average;
    var min = arrayInput[0];
    var max= arrayInput[0];
    for(i=0; i<arrayInput.length; i++){
        sumTotal += arrayInput[i]; // get to know the operations more
        // console.log(sumTotal)
        if(arrayInput[i] <= min){
            min = arrayInput[i];
        }
        else if(max >= arrayInput[i]){
            max >= arrayInput[i]
        }
    }
    average = sumTotal/arrayInput.length; // MUST RETURN A TEMPLATE LITERAL
    return `Sumtotal: ${sumTotal}, Average ${average}, Minimum: ${min}, Maximum: ${max}, Length: ${length}`
}
// console.log(ultAnalysis([37,2,1,-9]))

// 9) Complete!
// Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
// Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
function reverseList(arrayInput){
    for(i=0; i<arrayInput.length/2; i++){
        var storeFrontValue = arrayInput[i];
        var storeBackValue = arrayInput[arrayInput. length-1-i]
        // console.log(storeFrontValue) // checked here to see if it worked, which it did
        // console.log(storeBackValue)
        arrayInput[i] = storeBackValue;
        // console.log(arrayInput[i]) // checked to see if it did swap, which it did
        arrayInput[arrayInput.length-1-i] = storeFrontValue;
        // console.log(arrayInput[arrayInput.length-1-i]) // checked to see if it did swap, which it did
    }
    return arrayInput; 
}
console.log(reverseList([37,2,1,-9]))