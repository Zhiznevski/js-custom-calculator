export default function convertStringToNumber(currentValue, valueToAdd) {
  const current = parseFloat(currentValue);
  const newValue = parseFloat(valueToAdd);
  return {
    current,
    newValue,
  };
}
