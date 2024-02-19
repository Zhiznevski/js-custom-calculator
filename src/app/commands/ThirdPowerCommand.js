import Command from '../command';

export default class ThirdPowerCommand extends Command {
  execute(state) {
    const newValue = parseFloat(state.currentValue) ** 3;
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
