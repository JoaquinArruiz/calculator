let upperDisplay = document.querySelector('.upperdisplay');
let lowerDisplay = document.querySelector('.lowerdisplay');
let numButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll('.operator');
let decimalButton = document.querySelector('.decimal');
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equals');
let currentOperator;
let currentNum = '0';
let previousNum;
let operatorUsed = false;

//Lower display was a feature that I was trying to add but in the end it caused too much trouble, if i'm revisiting the project in the future
//I will try to implement it

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function() {
      if (operatorUsed === true) {
        currentNum = this.textContent;
        operatorUsed = false;
      } else {
        if (currentNum === '0') {
          currentNum = this.textContent;
        } else {
          currentNum += this.textContent;
        }
      }
      upperDisplay.textContent = currentNum;
    });
  }

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
      operatorUsed = true;
      previousNum = currentNum;
      currentOperator = this.textContent;
      lowerDisplay.textContent = previousNum + ' ' + currentOperator;
      currentNum = '0';
    });
  }


decimalButton.addEventListener('click', function() {
    if (!currentNum.includes('.')) {
      currentNum += '.';
    }
    upperDisplay.textContent = currentNum;
  });

clearButton.addEventListener('click', function() {
    currentOperator = undefined;
    currentNum = '0';
    upperDisplay.textContent = currentNum;
    lowerDisplay.textContent = '';
  });

clearButton.addEventListener('click', function() {
    currentOperator = undefined;
    currentNum = '0';
    upperDisplay.textContent = currentNum;
    lowerDisplay.textContent = '';
  });



equalsButton.addEventListener('click', function() {
    previousNum = parseFloat(previousNum);
    currentNum = parseFloat(currentNum);
  
    switch (currentOperator) {
      case '+':
        currentNum = previousNum + currentNum;
        break;
      case '-':
        currentNum = previousNum - currentNum;
        break;
      case '*':
        currentNum = previousNum * currentNum;
        break;
      case '/':
        currentNum = previousNum / currentNum;
        break;
      default:
        return;
    }
  
    upperDisplay.textContent = currentNum;
    lowerDisplay.textContent = '';
  });
  