import Calculator from './app/calculator';
import AddCommand from './app/commands/AddCommand';

console.log(AddCommand);
const calculator = new Calculator();
calculator.executeCommand(new AddCommand('20'));
calculator.executeCommand(new AddCommand('30'));
console.log(calculator.value);
