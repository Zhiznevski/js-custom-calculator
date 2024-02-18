import SquarePowerCommand from '../commands/SquarePowerCommand';

const mockState = {
  currentValue: '8',
};

const command = new SquarePowerCommand();

test('8 to the second power equals 64', () => {
  expect(command.execute(mockState).currentValue).toBe('64');
});
