import Command from '../command';

export default class SetOperationCommand extends Command {
  execute(state) {
    if (state.currentValue === '') {
      return state;
    }

    return {
      ...state,
      currentValue: '',
      prevValue: state.currentValue,
      operation: this.valueToAdd,
    };
  }
}
