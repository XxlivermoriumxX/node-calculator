var rs = require('readline-sync');

var getOperation = () => {
  let operation = rs.question('What operation would you like to perform? ');
  while (operation !== '/' && operation !== '*' && operation !== '+' && operation !== '-'){
    console.log('That is not a valid operation, please try again');
    getOperation();
  }
  return operation;
}

var getValue = (placement) => {
  let value = rs.questionInt('Please enter the ' + placement + ' number: ');
  if (value === NaN){
    console.log('This is not a number, please try again');
    getValue(placement);
  }
  return value;
}

var calculate = (num1, num2, operand) => {
  if(operation === '+'){
    return firstNum + secondNum;
  } else if (operation === '-'){
    return firstNum - secondNum;
  } else if (operation === '/'){
    //checking for 0
    if(secondNum === 0){
      console.log('Cannot divide by 0');
    } else {
      return firstNum / secondNum;
    }
  } else if (operation === '*'){
    return firstNum * secondNum;
  }
} 

let operation = getOperation();

let firstNum = getValue("first");

let secondNum = getValue("second");

var answer = calculate(firstNum, secondNum, operation)

console.log(firstNum + ' ' + operation + ' ' + secondNum + ' = ' + answer );

