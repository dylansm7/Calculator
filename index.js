const displayScreen = document.querySelector('#operation');
const addBtn = document.querySelector('.add-btn');
const reduceBtn = document.querySelector('.reduce-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const divideBtn = document.querySelector('.divide-btn');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.btn-equal');
const decimalBtn = document.querySelector('.btn-dec');
const backBtn = document.querySelector('.backBtn');


let num1 = null;
let num2 = null;
let displayValue = '';
let result = null;
let equalClicked = false;

function addNumberEventListener(button, value){
  button.addEventListener('click', () => {
    displayValue += value;
    displayScreen.value = displayValue;
  })
};



clearBtn.addEventListener('click', () => {
  num1 = null;
  num2 = null;
  displayValue = '';
  displayScreen.value = '';
});


equalBtn.addEventListener('click', () => { 
  if(num1 !== null && displayValue !== ''){
    num2 = Number(displayValue);
    result = operate();
    displayScreen.value = result;
    num1 = null;
    num2 = null;
  }else if(num1 === null && num2 === null && displayScreen.value !== ''){
    num1 = displayScreen.value;
    num2 = null;
    displayScreen.value = '';
  }
  displayValue= '';
  
});

function operate(){
  switch (operator){
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = displayValue
  };

  return result;
};

function addOperatorEventListener(button, op){

  button.addEventListener('click', () => {
    if(num1 === null){
      num1 = Number(displayValue);
      operator = op
      displayValue = '';
    }else if(num2 === null && displayValue !== ''){
      displayScreen.value = '';
      num2 = Number(displayValue);
      result = operate();
      num1 = result;
      num2 = null;
      operator = op;
      displayValue = '';
      displayScreen.value = result;
    }else if(num1 !== null && displayValue === ''){
      operator = op;
    }

  });
}

addNumberEventListener(document.querySelector('.btn-1'), '1');
addNumberEventListener(document.querySelector('.btn-2'), '2');
addNumberEventListener(document.querySelector('.btn-3'), '3');
addNumberEventListener(document.querySelector('.btn-4'), '4');
addNumberEventListener(document.querySelector('.btn-5'), '5');
addNumberEventListener(document.querySelector('.btn-6'), '6');
addNumberEventListener(document.querySelector('.btn-7'), '7');
addNumberEventListener(document.querySelector('.btn-8'), '8');
addNumberEventListener(document.querySelector('.btn-9'), '9');
addNumberEventListener(document.querySelector('.btn-0'), '0');


decimalBtn.addEventListener('click', () => {
  if(displayValue.includes('.')){
    alert('Cannot add more than 1 decimal')
  } else {
    displayValue += '.';
  }
});

backBtn.addEventListener('click', () => {
  if(displayValue.length > 1){
    console.log(typeof displayValue)
    displayValue = displayValue.substring(0, displayValue.length -1);
    
    displayScreen.value = displayValue;
  }
});


addOperatorEventListener(addBtn, '+');
addOperatorEventListener(reduceBtn, '-');
addOperatorEventListener(multiplyBtn, '*');
addOperatorEventListener(divideBtn, '/');


