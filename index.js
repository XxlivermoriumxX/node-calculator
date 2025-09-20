var rs = require('readline-sync');

var getOperation = () => {
  let operation = rs.question('What operation would you like to perform? ');
  if (operation != '/' || operation != '*' || operation != '+' || operation != '-' ){
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
}

var calculate = (num1, num2, operand) => {
  if(operation === '+'){
    answer = firstNum + secondNum;
  } else if (operation === '-'){
    answer = firstNum - secondNum;
  } else if (operation === '/'){
    //checking for 0
    if(secondNum === 0){
      console.log('Cannot divide by 0');
    } else {
      answer = firstNum / secondNum;
      var answerWhole = Math.trunc(answer);
      var answerMod = firstNum % secondNum;
    }
  } else if (operation === '*'){
    answer = firstNum * secondNum;
  }
} 

var operation = getOperation();

var firstNum = getValue("first");

var secondNum = getValue("second");

var answer = calculate(firstNum, secondNum, operation)

if(operation === '/'){
  console.log(firstNum + ' ' + operation + ' ' + secondNum + ' = ' + answer + ' OR ' + answerWhole + ' with ' + answerMod + 'remaining')
} else{
  console.log(firstNum + ' ' + operation + ' ' + secondNum + ' = ' + answer );
}

