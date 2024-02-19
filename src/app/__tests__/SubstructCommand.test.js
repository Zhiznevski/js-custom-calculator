import SubstructCommand from '../commands/SubstructCommand';

const mockState = {
  currentValue: '6',
  prevValue: '10',
};

const command = new SubstructCommand();

test('10 substruct 6 equals 4', () => {
  expect(command.execute(mockState).currentValue).toBe('4');
});
