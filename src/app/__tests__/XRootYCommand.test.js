import XRootYCommand from '../commands/XRootYCommand';

const mockState = {
  currentValue: '4',
  prevValue: '16',
};

const command = new XRootYCommand();

test('The 4th root of 16 is 2', () => {
  expect(command.execute(mockState).currentValue).toBe('2');
});
