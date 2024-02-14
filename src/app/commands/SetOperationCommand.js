import Command from '../command';

export default class setOperationCommand extends Command {
  execute(currentValue) {
    console.log(currentValue);
  }
}
