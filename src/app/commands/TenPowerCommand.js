import Command from '../command';

export default class TenPowerCommand extends Command {
  execute(state) {
    const newValue = 10 ** parseFloat(state.currentValue);
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
