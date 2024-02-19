import Command from '../command';

export default class ThirdRootCommand extends Command {
  execute(state) {
    const newValue = parseFloat(Math.cbrt(state.currentValue));
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
