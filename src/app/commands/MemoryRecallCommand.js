import Command from '../command';

export default class MemoryRecallCommand extends Command {
  execute(state) {
    return {
      ...state,
      currentValue: state.memory,
    };
  }
}
