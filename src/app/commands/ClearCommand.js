import Command from '../command';

export default class ClearCommand extends Command {
  execute(state) {
    return {
      ...state,
      currentValue: '',
      prevValue: '',
      operation: null,
    };
  }
}
