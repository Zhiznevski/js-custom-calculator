import './index.css';
import Calculator from './app/calculator';
import AddCommand from './app/commands/AddCommand';
import AddDigitCommand from './app/commands/AddDigitСommand';
import SubstructCommand from './app/commands/SubstructCommand';

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(7));
console.log(calculator.currentValue);
calculator.executeCommand(new SubstructCommand('5'));
calculator.executeCommand(new AddDigitCommand('0'));
console.log(calculator.currentValue);
calculator.executeCommand(new AddCommand('5'));
calculator.executeCommand(new AddDigitCommand('5'));
console.log(calculator.currentValue);
