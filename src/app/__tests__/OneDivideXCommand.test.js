import OneDivideXCommand from '../commands/OneDivideXCommand';

const mockState = {
  currentValue: '10',
};

const command = new OneDivideXCommand();

test('1 divided by 10 equals 0.1', () => {
  expect(command.execute(mockState).currentValue).toBe('0.1');
});
