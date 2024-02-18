import MultiplyCommand from '../commands/MultiplyCommand';

const mockState = {
  currentValue: '6',
  prevValue: '5',
};

const command = new MultiplyCommand();

test('6 multiply by 5  equals 30', () => {
  expect(command.execute(mockState).currentValue).toBe('30');
});
