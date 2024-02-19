import SwitchSignCommand from '../commands/SwitchSignCommand';

const mockState = {
  currentValue: '10',
};

const command = new SwitchSignCommand();

test('10 with switched sign is -10', () => {
  expect(command.execute(mockState).currentValue).toBe('-10');
});
