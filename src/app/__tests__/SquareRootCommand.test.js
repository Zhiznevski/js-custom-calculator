import SquareRootCommand from '../commands/SquareRootCommand';

const mockState = {
  currentValue: '9',
};

const command = new SquareRootCommand();

test('square root of 9 is 3', () => {
  expect(command.execute(mockState).currentValue).toBe('3');
});
