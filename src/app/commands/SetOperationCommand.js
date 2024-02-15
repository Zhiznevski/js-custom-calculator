import Command from '../command';

import { ActionsWithOneOperand, ActionsWithTwoOperands } from '../actions/actions';

export default class SetOperationCommand extends Command {
  execute(state) {
    if (state.currentValue === '') {
      return state;
    }

    if (state.prevValue !== '') {
      // 2 операнда -   Actions with 2 operands
      console.log(this.valueToAdd);
      const res = new ActionsWithTwoOperands[this.valueToAdd]().execute(state).currentValue;
      return {
        ...state,
        currentValue: '',
        operation: this.valueToAdd,
        prevValue: res,
      };
    }
    if (ActionsWithOneOperand[this.valueToAdd]) {
      // 1 операнд - Actions with 1 operand
      const value = new ActionsWithOneOperand[this.valueToAdd]().execute(state).currentValue;
      return {
        ...state,
        currentValue: value,
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
