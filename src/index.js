import './index.css';
import Calculator from './app/calculator';
import AddDigitCommand from './app/commands/AddDigitCommand';
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
const themeBtn = document.querySelector('.theme-button');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

const calculator = new Calculator(display);

oneOperandBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new ActionsWithOneOperand[button.dataset.operand]());
  });
});

operations.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new SetOperationCommand(button.dataset.operation));
  });
});

digits.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new AddDigitCommand(button.innerText));
  });
});

clear.addEventListener('click', () => {
  calculator.executeCommand(new ClearCommand());
});

equals.addEventListener('click', () => {
  if (ActionsWithTwoOperands[calculator.state.operation]) {
    calculator.executeCommand(new ActionsWithTwoOperands[calculator.state.operation]());
  }
});

memoryBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.executeCommand(new ActionsWithMemory[button.dataset.memory]());
  });
});

themeBtn.addEventListener('click', () => {
  output.classList.toggle('output-light-mode');
  themeBtn.classList.toggle('theme-button-light-mode');
  buttons.forEach((el) => el.classList.toggle('button-light-mode'));
});
