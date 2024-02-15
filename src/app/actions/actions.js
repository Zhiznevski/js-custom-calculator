import AddCommand from '../commands/AddCommand';
import SubstructCommand from '../commands/SubstructCommand';
import DivideCommand from '../commands/DivideCommand';
import MultiplyCommand from '../commands/MultiplyCommand';
import SwitchSignCommand from '../commands/SwitchSignCommand';
import PercentCommand from '../commands/PercentCommand';

export const ActionsWithTwoOperands = {
  ADD: AddCommand,
  SUBSTRUCT: SubstructCommand,
  DIVIDE: DivideCommand,
  MULTIPLY: MultiplyCommand,
};

export const ActionsWithOneOperand = {
  SWITCHSIGN: SwitchSignCommand,
  PERCENT: PercentCommand,
};
