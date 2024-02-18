import AddCommand from '../commands/AddCommand';

const mockState = {
  currentValue: '1',
  prevValue: '3',
};

const command = new AddCommand();

test('adds 1 + 3 to equal 4', () => {
  expect(command.execute(mockState).currentValue).toBe('4');
});
