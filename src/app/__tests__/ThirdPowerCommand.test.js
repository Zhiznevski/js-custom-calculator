import ThirdPowerCommand from '../commands/ThirdPowerCommand';

const mockState = {
  currentValue: '3',
};

const command = new ThirdPowerCommand();

test('3 to the second power equals 27', () => {
  expect(command.execute(mockState).currentValue).toBe('27');
});
