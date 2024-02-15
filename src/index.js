import './index.css';
import Calculator from './app/calculator';
import AddCommand from './app/commands/AddCommand';
import AddDigitCommand from './app/commands/AddDigitСommand';
import SubstructCommand from './app/commands/SubstructCommand';
import SetOperationCommand from './app/commands/SetOperationCommand';

const operations = document.querySelectorAll('[data-operation]');
const digits = document.querySelectorAll('[data-number]');
const equals = document.querySelector('[data-equals]');
const input = document.querySelector('[data-display]');

const calculator = new Calculator(input);

const ACTIONS = {
  add: AddCommand,
  substruct: SubstructCommand,
};

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

equals.addEventListener('click', () => {
  if (ACTIONS[calculator.state.operation]) {
    calculator.executeCommand(new ACTIONS[calculator.state.operation]());
  }
  console.log(calculator.state);
});
