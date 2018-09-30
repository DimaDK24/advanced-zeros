module.exports = function getZerosCount(number, base) {
  let count = 0;
  const simpleMultipliers = getSimpleMultipliers(base);
  const biggestMultiplier = Math.max(...simpleMultipliers);
  for (let i = biggestMultiplier; number >= i; i = i * biggestMultiplier)
    count += Math.floor(number / i);
  return count;
};

function getSimpleMultipliers(number) {
  let multipliers = [];
  while (number % 2 === 0) {
    multipliers.push(2);
    number = Math.floor(number / 2);
  }
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      multipliers.push(i);
      number = Math.floor(number / i);
    }
  }
  if (number !== 1) multipliers.push(number);
  return [...new Set(multipliers)];
}
