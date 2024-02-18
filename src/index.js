import './index.css';
import Calculator from './app/calculator';
import AddDigitCommand from './app/commands/AddDigitСommand';
import SetOperationCommand from './app/commands/SetOperationCommand';
import ClearCommand from './app/commands/ClearCommand';
import {
  ActionsWithMemory,
  ActionsWithOneOperand,
  ActionsWithTwoOperands,
} from './app/actions/actions';

const operations = document.querySelectorAll('[data-operation]');
const digits = document.querySelectorAll('[data-number]');
const equals = document.querySelector('[data-equals]');
const display = document.querySelector('[data-display]');
const clear = document.querySelector('.clear');
const oneOperandBtns = document.querySelectorAll('[data-operand]');
const memoryBtns = document.querySelectorAll('[data-memory]');

const calculator = new Calculator(display);

oneOperandBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new ActionsWithOneOperand[button.dataset.operand]());
    console.log(calculator.state);
  });
});

operations.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new SetOperationCommand(button.dataset.operation));
    console.log(calculator.state);
  });
});

digits.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new AddDigitCommand(button.innerText));
    console.log(calculator.state);
  });
});

clear.addEventListener('click', () => {
  calculator.executeCommand(new ClearCommand());
  console.log(calculator.state);
});

equals.addEventListener('click', () => {
  if (ActionsWithTwoOperands[calculator.state.operation]) {
    calculator.executeCommand(new ActionsWithTwoOperands[calculator.state.operation]());
  }
  console.log(calculator.state);
});

memoryBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new ActionsWithMemory[button.dataset.memory]());
    console.log(calculator.state);
  });
});
