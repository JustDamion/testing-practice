function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

function caesarCipher(string, step) {
  const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];
  const stringArr = string.split("");
  const encodedString = [];

  for (let i = 0; i < stringArr.length; i++) {
    const isUppercase = stringArr[i] === stringArr[i].toUpperCase();
    let pointer = ALPHABET.indexOf(stringArr[i].toLowerCase()) + step;

    if (ALPHABET.indexOf(stringArr[i].toLowerCase()) === -1) {
      encodedString.push(stringArr[i]);
      continue;
    }

    if (pointer > ALPHABET.length - 1) {
      pointer = pointer - ALPHABET.length;
    }

    encodedString.push(
      isUppercase ? ALPHABET[pointer].toUpperCase() : ALPHABET[pointer],
    );
  }

  return encodedString.join("");
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((acc, next) => acc + next) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
