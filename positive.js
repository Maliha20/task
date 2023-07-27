//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


let sum = 0
function total(n){
  for(let i= 0; i< num.length; i++){
    let value = num[i]
    if(value>0){
      sum = sum + value;
    }
  }

  return sum;
}
const num = [2,5,-12, -5, 3,-9 ,4]
const result = total(num);


