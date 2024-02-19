import PercentCommand from '../commands/PercentCommand';

const mockState = {
  currentValue: '9',
};

const command = new PercentCommand();

test('9 percent equals 0.09', () => {
  expect(command.execute(mockState).currentValue).toBe('0.09');
});
