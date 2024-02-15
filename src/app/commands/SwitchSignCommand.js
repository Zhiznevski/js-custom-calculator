import Command from '../command';

export default class SwitchSignCommand extends Command {
  execute(state) {
    console.log(state);
    const newValue = (state.currentValue * -1).toString();
    console.log(newValue);
    return {
      ...state,
      currentValue: newValue,
    };
  }
}
