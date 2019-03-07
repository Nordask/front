/**
 * Roman Numeral Converter
 * Convert the given number into a roman numeral.
 */


 /**
  * let romanNumbers = {
   1 : 'I',
   4 : 'IV',
   5 : 'V',
   9 : 'IX',
   10 : 'X',
   40 : 'XL',
   50 : 'L',
   90 : 'XC',
   100 : 'C',
   400 : 'CD',
   500 : 'D',
   900 : 'CM',
   1000 : 'M'
 }
  */

 function convertToRoman(num) {
    let result = '';
    let decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C','CD', 'D', 'CM', 'M']
    
    for(let i = decimals.length - 1; i >= 0; i--) {
      while(decimals[i] <= num) {
        result += romans[i]
        num -= decimals[i]
      }
    }
   
    return result;
   }
   
   console.log(convertToRoman(36));
   console.log(convertToRoman(2));
   console.log(convertToRoman(3));
   console.log(convertToRoman(4));
   console.log(convertToRoman(5));
   console.log(convertToRoman(9));
   console.log(convertToRoman(12));
   console.log(convertToRoman(16));
   console.log(convertToRoman(29));
   console.log(convertToRoman(44));
   console.log(convertToRoman(45));
   console.log(convertToRoman(68));
   


