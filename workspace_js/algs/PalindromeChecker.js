/**
 * Palindrome Checker
 * A palindrome is a word or sentence that's spelled the same way both forward 
 * and backward, ignoring punctuation, case, and spacing.
 * Return true if the given string is a palindrome. Otherwise, return false.
 */

 // regexp /[\W_]/g match everything except letters and number, and match _
 // \W - opposite patter, is equal [^A-Za-z0-9_]

 function palindrome(str) {
    let tempStr = str.replace(/[\W_]/g, '').toLowerCase()
    console.log(tempStr)
    let tempStrReverse = tempStr.split('').reverse().join('')
    console.log(tempStrReverse)
  
    return tempStr === tempStrReverse
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("race car"));
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("never odd or even"));
  console.log(palindrome("nope"));
  console.log(palindrome("almostomla"));
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("1 eye for of 1 eye."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("five|\_/|four"));

  // Another way
  function palindromeSecond(str) {
    let tempStr = str.replace(/[\W_]/g, '').toLowerCase()
    console.log(tempStr)
    let lastIndex = tempStr.length - 1
    for(let i = 0; i < (lastIndex/2); i++) {
      if(tempStr.charAt(i) !== tempStr.charAt(lastIndex - i))
        return false
    }
    return true
  }
  
  console.log(palindromeSecond("eye"));
  console.log(palindromeSecond("_eye"));
  console.log(palindromeSecond("race car"));
  console.log(palindromeSecond("not a palindrome"));
  console.log(palindromeSecond("A man, a plan, a canal. Panama"));
  console.log(palindromeSecond("never odd or even"));
  console.log(palindromeSecond("nope"));
  console.log(palindromeSecond("almostomla"));
  console.log(palindromeSecond("My age is 0, 0 si ega ym."));
  console.log(palindromeSecond("1 eye for of 1 eye."));
  console.log(palindromeSecond("0_0 (: /-\ :) 0-0"));
  console.log(palindromeSecond("five|\_/|four"));

  //Another way
  function palindromeThird(str) {
    let begin = 0
    let end = str.length - 1
    let pattern = /[\W_/g]/
    while(begin < end) {
      if(str.charAt(begin).match(pattern)) {
        begin++
        continue
      }

      if(str.charAt(end).match(pattern)) {
        end--
        continue
      }
      if(str[begin].toLowerCase() !== str[end].toLowerCase()) 
        return false

      begin++
      end--   
    }
    return true
  }
  
  console.log(palindromeThird("eye"));
  console.log(palindromeThird("_eye"));
  console.log(palindromeThird("race car"));
  console.log(palindromeThird("not a palindrome"));
  console.log(palindromeThird("A man, a plan, a canal. Panama"));
  console.log(palindromeThird("never odd or even"));
  console.log(palindromeThird("nope"));
  console.log(palindromeThird("almostomla"));
  console.log(palindromeThird("My age is 0, 0 si ega ym."));
  console.log(palindromeThird("1 eye for of 1 eye."));
  console.log(palindromeThird("0_0 (: /-\ :) 0-0"));
  console.log(palindromeThird("five|\_/|four"));