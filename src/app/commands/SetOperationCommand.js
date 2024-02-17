import Command from '../command';

import { ActionsWithTwoOperands } from '../actions/actions';

export default class SetOperationCommand extends Command {
  execute(state) {
    if (state.currentValue === '') {
      return state;
    }

    if (state.prevValue !== '') {
      // 2 операнда -   Actions with 2 operands
      console.log(this.valueToAdd);
      const res = new ActionsWithTwoOperands[state.operation]().execute(state).currentValue;
      return {
        ...state,
        currentValue: '',
        operation: this.valueToAdd,
        prevValue: res,
      };
    }
    return {
      ...state,
      currentValue: '',
      prevValue: state.currentValue,
      operation: this.valueToAdd,
    };
  }
}
