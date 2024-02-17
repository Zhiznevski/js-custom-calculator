import Command from '../command';

export default class SwitchSignCommand extends Command {
  execute(state) {
    const newValue = state.currentValue * -1;
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
