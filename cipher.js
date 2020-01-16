function rotCipher(str) {
  //generated alphabet
  let alphabet = Array.apply(undefined, Array(26)).map((x,y) => String.fromCharCode(y + 65)).join('');

  let index;
  let newStr = '';

  //loop by each letter of input string, getting letter index in alphabet
  for (let letter of str) {
    if ((alphabet.indexOf(letter) + 13) >= 26) {
      index = Math.abs(26 - (alphabet.indexOf(letter) + 13));
    } else {
      index = (alphabet.indexOf(letter) + 13);
    }

    letter = alphabet.includes(letter)
    ? alphabet[index]
    : letter;

    newStr += letter;
  }

  return newStr;
}
