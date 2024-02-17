import AddCommand from '../commands/AddCommand';
import SubstructCommand from '../commands/SubstructCommand';
import DivideCommand from '../commands/DivideCommand';
import MultiplyCommand from '../commands/MultiplyCommand';
import SwitchSignCommand from '../commands/SwitchSignCommand';
import PercentCommand from '../commands/PercentCommand';
import SquarePowerCommand from '../commands/SquarePowerCommand';
import ThirdPowerCommand from '../commands/ThirdPowerCommand';
import TenPowerCommand from '../commands/TenPowerCommand';
import OneDivideXCommand from '../commands/OneDivideXCommand';
import SquareRootCommand from '../commands/SquareRootCommand';
import ThirdRootCommand from '../commands/ThirdRootCommand';
import FactorialCommand from '../commands/FactorialCommand';
import XPowerYCommand from '../commands/XPowerYCommand';
import XRootYCommand from '../commands/XRootYCommand';

export const ActionsWithTwoOperands = {
  ADD: AddCommand,
  SUBSTRUCT: SubstructCommand,
  DIVIDE: DivideCommand,
  MULTIPLY: MultiplyCommand,
  XPOWERY: XPowerYCommand,
  XROOTY: XRootYCommand,
};

export const ActionsWithOneOperand = {
  SWITCHSIGN: SwitchSignCommand,
  PERCENT: PercentCommand,
  SQUAREPOWER: SquarePowerCommand,
  THIRDPOWER: ThirdPowerCommand,
  TENXPOWER: TenPowerCommand,
  ONEDIVIDEX: OneDivideXCommand,
  SQUAREROOT: SquareRootCommand,
  THIRDROOT: ThirdRootCommand,
  FACTORIAL: FactorialCommand,
};
