import Command from '../command';

export default class MemoryAddCommand extends Command {
  execute(state) {
    const value = +state.memory;
    const res = (value + parseFloat(+state.currentValue)).toString();
    return {
      ...state,
      memory: res,
    };
  }
}
