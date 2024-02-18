import XPowerYCommand from '../commands/XPowerYCommand';

const mockState = {
  currentValue: '2',
  prevValue: '5',
};

const command = new XPowerYCommand();

test('5 to the power of 2 equals 25', () => {
  expect(command.execute(mockState).currentValue).toBe('25');
});
