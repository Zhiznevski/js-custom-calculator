import Command from '../command';

export default class MemoryClearCommand extends Command {
  execute(state) {
    return {
      ...state,
      memory: '',
    };
  }
}
