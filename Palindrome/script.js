function isPalindrome(str) {
  str = str.toLowerCase();
  let charactersArr = str.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz';

  let lettersArr = [];
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  const isPalindrome = lettersArr.join('') === lettersArr.reverse().join('');

  return isPalindrome;
}

console.log(isPalindrome("Madam I'm Adam"));
