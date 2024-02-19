import TenPowerCommand from '../commands/TenPowerCommand';

const mockState = {
  currentValue: '3',
};

const command = new TenPowerCommand();

test('10 to the third power is equal to 1000', () => {
  expect(command.execute(mockState).currentValue).toBe('1000');
});
