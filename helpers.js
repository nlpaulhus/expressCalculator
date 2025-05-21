function getNums(string) {
  let splitString = string.split(",");
  let result = [];

  for (let i = 0; i < splitString.length; i++) {
    if (isNaN(splitString[i])) {
      throw new Error(`${splitString[i]} is not a valid number`);
    } else result.push(Number(splitString[i]));
  }

  return result;
}

function getMean(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  let mean = sum / arr.length;

  return mean;
}

function getMedian(arr) {
  const sortedNumbers = [...arr].sort((a, b) => a - b);
  const length = sortedNumbers.length;
  const half = Math.floor(length / 2);

  let median =
    length % 2 === 0
      ? (sortedNumbers[half - 1] + sortedNumbers[half]) / 2
      : sortedNumbers[half];

  return median;
}

function getMode(arr) {
  const frequencyMap = {};

  arr.forEach((number) => {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  });

  let modes = [];
  let maxFrequency = 0;

  for (const number in frequencyMap) {
    const frequency = frequencyMap[number];
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      modes = [parseInt(number)];
    } else if (frequency === maxFrequency) {
      modes.push(parseInt(number));
    }
  }

  return modes;
}

module.exports = {
  getNums,
  getMean,
  getMedian,
  getMode,
};
