const rs = require("readline-sync");

const arrOperationsObject = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const getOperation = (validOperations) => {
  let operation = rs.question("What operation would you like to perform? ", {
    limit: validOperations,
    limitMessage: "That is not a valid operation, please try again",
  });

  return operation;
};

const getNumber = (placement, isDivision = false) => {
  const input = rs.questionInt("Please enter the " + placement + " number: ", {
    limitMessage: "That is not a valid number",
  });
  if (isDivision && placement === "second" && input === 0) {
    console.log("Cannot divide by zero! Choose a different second number");
    return getNumber(placement, isDivision);
  }

  return input;
};

const calculate = (num1, num2, operand, config) => {
  return config[operand](num1, num2);
};

const runCalculator = (validOperationsObject) => {
  const validOperations = Object.keys(validOperationsObject);
  const operation = getOperation(validOperations);
  const firstNum = getNumber("first");
  const secondNum = getNumber("second", operation === "/");
  const answer = calculate(
    firstNum,
    secondNum,
    operation,
    validOperationsObject
  );
  console.log(firstNum + " " + operation + " " + secondNum + " = " + answer);
};

runCalculator(arrOperationsObject);
