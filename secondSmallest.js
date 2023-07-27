//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



const arr = [20,12,43,23,65,17,5]

const sortedArr = arr.sort((a, b) => a - b)

const secondSmallest = sortedArr[1]
console.log("The second smallest number in the array is", secondSmallest)