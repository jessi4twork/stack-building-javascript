function reverseString(str) {
  const splitWord = str.split('');
  const reverseWord = splitWord.reverse('');
  const joinWord = reverseWord.join('');
  return joinWord;
}

console.log(reverseString("hello"));