function calculator(num1,operator, num2){
    switch(operator){
        case "+":
        return num1 + num2;
        case "-":
        return num1 - num2;
        case "*":
        return num1 * num2;
        case "/":
        if(num2===0){
            return "Invalid, cannot devide by zero"
        }
       else{
        return num1 / num2;
       }

       default: 
       return "Invalid Operator"
    }
}

const num1 = 10;
const num2 = 0;
const operator = '/';
const result = calculator(num1, operator, num2);
console.log(result);