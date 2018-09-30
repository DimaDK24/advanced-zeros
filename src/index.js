module.exports = function getZerosCount(number, base) {
  let count = 0;
  const simpleMultipliers = getSimpleMultipliers(base);
  const biggestMultiplier = getBiggestMultiplier(simpleMultipliers);
  for (
    let i = biggestMultiplier.value;
    number >= i;
    i = i * biggestMultiplier.value
  )
    count += Math.floor(number / i);
  count = Math.floor(count / biggestMultiplier.number);
  return count;
};

function getSimpleMultipliers(number) {
  let multipliers = [];
  if (number % 2 === 0) multipliers.push({ value: 2, number: 0 });
  while (number % 2 === 0) {
    multipliers[0].number++;
    number = Math.floor(number / 2);
  }
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      multipliers.push({ value: i, number: 0 });
      while (number % i === 0) {
        multipliers[multipliers.length - 1].number++;
        number = Math.floor(number / i);
      }
    }
  }
  if (number !== 1) multipliers.push({ value: number, number: 1 });
  return multipliers;
}

function getBiggestMultiplier(multipliers) {
  let max = 0,
    item;
  for (multiplier of multipliers) {
    const number = multiplier.value ** multiplier.number;
    if (number > max) {
      max = number;
      item = multiplier;
    }
  }
  return item;
}
