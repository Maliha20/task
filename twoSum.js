//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const total = function(nums , target){
    for(let i = 0; i<nums.length; i++){
      for(let j = i+1; j<nums.length; j++){
        if(nums[i] + nums[j] === target){
            return [i , j]
        }
      }
    }

    }
    

    let nums = [1, 3, 6, 8, 11, 15], target = 9;
    console.log(total(nums,target))