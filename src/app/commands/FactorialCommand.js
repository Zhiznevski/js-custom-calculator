import Command from '../command';

export default class FactorialCommand extends Command {
  execute(state) {
    const newValue = parseFloat(state.currentValue);
    const calculateFactorial = (value) => (value ? value * calculateFactorial(value - 1) : 1); // >102 ----> Ошибка
    const res = calculateFactorial(newValue);
    if (Number.isNaN(res)) return state;
    return {
      ...state,
      currentValue: res.toString(),
    };
  }
}
