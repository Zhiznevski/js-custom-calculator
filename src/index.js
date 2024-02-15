import './index.css';
import Calculator from './app/calculator';
import AddDigitCommand from './app/commands/AddDigitСommand';
import SetOperationCommand from './app/commands/SetOperationCommand';
import ClearCommand from './app/commands/ClearCommand';
import { ActionsWithTwoOperands } from './app/actions/actions';

const operations = document.querySelectorAll('[data-operation]');
const digits = document.querySelectorAll('[data-number]');
const equals = document.querySelector('[data-equals]');
const input = document.querySelector('[data-display]');
const clear = document.querySelector('.clear');

const calculator = new Calculator(input);

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
