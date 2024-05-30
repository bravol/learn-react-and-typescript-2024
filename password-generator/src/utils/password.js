const getRandomCharacter = (text) => {
  return text[Math.floor(Math.random() * text.length)];
};
//shffle
const shuffle = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; //exchange of places
  }
  return array;
};
export function generatePassword(config) {
  let results = "";
  let charToSkip = 1;
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specials = "!@#$%^&*()_+{}[]:;<>?,./|";

  let alphabet = lowerCase;
  results += getRandomCharacter(lowerCase);

  if (config.uppercase) {
    alphabet += upperCase;
    results += getRandomCharacter(upperCase);
    charToSkip++;
  }
  if (config.number) {
    alphabet += numbers;
    results += getRandomCharacter(numbers);
    charToSkip++;
  }
  if (config.special) {
    alphabet += specials;
    results += getRandomCharacter(specials);
    charToSkip++;
  }

  for (let i = charToSkip; i < Number(config.size); i++) {
    results += getRandomCharacter(alphabet);
  }
  const shuffledPassword = shuffle(results).join("");
  return shuffledPassword;
}

// // let temp = array[i];
// // array[i] = array[j];
// // array[j] = temp;
// [array[i], array[j]] = [array[j], array[i]];
