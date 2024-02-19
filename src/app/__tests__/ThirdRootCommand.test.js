import ThirdRootCommand from '../commands/ThirdRootCommand';

const mockState = {
  currentValue: '27',
};

const command = new ThirdRootCommand();

test('third root of 27 is 3', () => {
  expect(command.execute(mockState).currentValue).toBe('3');
});
