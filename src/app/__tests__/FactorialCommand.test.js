import FactorialCommand from '../commands/FactorialCommand';

const mockState = {
  currentValue: '4',
};

const command = new FactorialCommand();

test('Factorial of 4 is 24', () => {
  expect(command.execute(mockState).currentValue).toBe('24');
});
