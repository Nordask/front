/**
 * Caesars Cipher
 * also known as a shift cipher
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a simple letter 
 * substitution cipher that replaces a letter with the 13th letter after it, 
 * in the alphabet.
 */

 //decoder

 function rot13(str) {
    let resultStr = ''
    
    for(let index in str) {
      if(str.charAt(index).match(/[A-Z]/)) { // ascii range 0x41-0x5A
        let asciiNumber = str.charCodeAt(index)
        if(asciiNumber >= 0x4E) // 0x4E + 0xD more than 0x5A
          resultStr += String.fromCharCode((asciiNumber - 0xD))
        else
          resultStr += String.fromCharCode((asciiNumber + 0xD))  
      } else{
        resultStr += str.charAt(index)
      }
    }
    
    return resultStr;
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));