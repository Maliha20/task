//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function mostFrequent(arr){
    const freq = {}
    for(const element of arr){
      if(freq[element]){
        freq[element]++
      }
      else{
        freq[element] = 1
      }
    }
  
    let mostFreqElement;
  let highestFreq = 0;
  for(const element in freq){
    if(freq[element]> highestFreq){
      mostFreqElement = element;
      highestFreq = freq[element]
    }
  }
  
  return mostFreqElement
  }
  
  const arr = [4, 5, 2, 5, 4, 3, 1, 4, 5]
  const mostFreqElement = mostFrequent(arr)
  
  console.log(mostFreqElement)