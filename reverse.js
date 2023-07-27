//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reveredString(str){
    const splitStr = str.split("")
    const valueStr = splitStr.reverse()
    const joinStr = valueStr.join("")
  
    return joinStr;
  }
  
  const string = "I am Maliha"
  const input = reveredString(string)
  