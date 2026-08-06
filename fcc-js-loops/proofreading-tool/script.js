function isPalindrome(word) {
  let wordLowerCase = word.toLowerCase();
  let wordSplitReverseJoin = wordLowerCase.split('').reverse().join('');
  return wordSplitReverseJoin === wordLowerCase;
}

function findPalindromeBreaks(words) {
  let breaks = [];
  
  for(let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    let revJoin = word.split('').reverse().join('');

    if(word !== revJoin) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if(phraseLength >= words.length){
    return [];
  }

  let answers = [];

  for(let i = 0; i <= words.length - phraseLength; i++) {
    let p1 = words.slice(i, i + phraseLength).join('');

    for(let j = 0; j <= words.length - phraseLength; j++) {
      if (i === j) continue;
      
      let p2 = words.slice(j, j + phraseLength).join('');

      if (p1 === p2){
        answers.push(i);
        break;
      }
    }
  }
  return answers;
}

function analyzeTexts(texts, phraseLength) {
  let final = [];
  for(let i = 0; i < texts.length; i++) {
    let origWords = texts[i];
    let repeated = findRepeatedPhrases(origWords, phraseLength);
    let palindromeBreaks = findPalindromeBreaks(origWords);
    final.push({
      repeatedPhrases: repeated,
      palindromeBreaks: palindromeBreaks
    });
  }
  return final;
}