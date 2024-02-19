import DivideCommand from '../commands/DivideCommand';

const mockState = {
  currentValue: '4',
  prevValue: '12',
};

const mockStateWithZero = {
  currentValue: '0',
  prevValue: '10',
};

const command = new DivideCommand();

test('12 divided by 4 equals 3', () => {
  expect(command.execute(mockState).currentValue).toBe('3');
});

test('12 divided by 0 is a Error', () => {
  expect(command.execute(mockStateWithZero).currentValue).toBe('Ошибка');
});
