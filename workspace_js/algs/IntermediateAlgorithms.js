/**
 * Sum All Numbers in a Range
 * array of two numbers
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 */

function sumAll(arr) {
    let tempArr = []
    let bottomLine = arr[0] > arr[1] ? arr[1] : arr[0]
    let topLine = arr[0] > arr[1] ? arr[0] : arr[1]
    for(let i = bottomLine + 1; i < topLine; i++) {
      tempArr.push(i)
    }
    return arr[0] + arr[1] + tempArr.reduce((lastElem, nextElem) => {return (lastElem + nextElem)});
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));
  console.log(sumAll([5, 10]));
  console.log(sumAll([10, 5]));

  /**
   * Diff Two Arrays
   * Compare two arrays and return a new array with any items only found in 
   * one of the two given arrays, but not both. In other words, return the 
   * symmetric difference of the two arrays.
   */

  function diffArray(arr1, arr2) {
    var newArr = [];
    for(let elem in arr1) {
      if(arr2.indexOf(arr1[elem]) === -1) {
        newArr.push(arr1[elem])
      }
    }
  
    for(let elem in arr2) {
      if(arr1.indexOf(arr2[elem]) === -1) {
        newArr.push(arr2[elem])
      }
    }
  
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /**
   * Seek and Destroy
   *Remove all elements from the initial array that are 
   *of the same value as these arguments. 
   */

  function destroyer(arr, ...args) {
    return arr.filter((item) => args.indexOf(item) === -1);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

  /**
   *Make a function that looks through an array of objects (first argument) 
   *and returns an array of all objects that have matching name and value pairs 
   *(second argument). Each name and value pair of the source object has to be present 
   *in the object from the collection if it is to be included in the returned array. 
   */

  function whatIsInAName(collection, source) {
    // What's in a name?
    let keys = Object.keys(source)
    console.log(keys)
    // Only change code below this line
    return collection.filter(item => {
      return keys.every(key => {
        console.log(key + item)
        return item.hasOwnProperty(key) && item[key] === source[key];  
      });
    });
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  console.log(whatIsInAName(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })));

  /**
   * Spinal Tap Case
   * Convert a string to spinal case. 
   * Spinal case is all-lowercase-words-joined-by-dashes.
   */
  function spinalCase(str) {
  
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    //console.log(RegExp.$1)
    //console.log(RegExp.$2)
    //console.log(str)
    return str.replace((/\s+|_+/g), '-').toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase('thisIsSpinalTap'));
  console.log(spinalCase('The_Andy_Griffith_Show'));
  console.log(spinalCase('Teletubbies say Eh-oh'));
  console.log(spinalCase('AllThe-small Things'));

  /**
   * Pig Latin
   * Pig Latin takes the first consonant (or consonant cluster) of an English word, 
   * moves it to the end of the word and suffixes an "ay".
   * If a word begins with a vowel you just add "way" to the end.
   * Input strings are guaranteed to be English words in all lowercase.
   */

  function translatePigLatin(str) {
    function getIndex(str) {
      for(let i = 0; i < str.length; i++) {
        if(['a','e','i','o','u'].indexOf(str[i]) !== -1) {
          return i - 1;
        }
      }
    }
    
    return (/^[aeiou]/i).test(str)? str.concat("way") : 
            str.substr(getIndex(str) + 1, str.length) + str.substr(0,getIndex(str) + 1) + "ay";
    
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));

  /**
   * Search and Replace
   * First argument is the sentence to perform the search and replace on.
   * Preserve the case of the first character in the original word when 
   * you are replacing it.
   */

  function myReplace(str, before, after) {
    let afterResult = (/^[A-Z]/).test(before) ? 
                        after.substr(0,1).toUpperCase() + after.substr(1, after.length) :
                        after; 
    return str.replace(before, afterResult);
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

/**
 * DNA Pairing
 * The DNA strand is missing the pairing element. Take each character, 
 * get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
*/

function pairElement(str) {
    function getPair(character) {
      switch(character) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'C': return 'G';
        case 'G': return 'C'; 
      }
    }
    let arr = []
    for(let elem in str) {
      //console.log(str[elem])
      arr.push([str[elem], getPair(str[elem])])     
    }
    return arr;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("CTCTA"));

  /**
   * Missing letters
   * Find the missing letter in the passed letter range and return it.
   * If all letters are present in the range, return undefined.
   */

  function fearNotLetter(str) {
    for(let i = 1; i < str.length; i++) {
      if(str.charCodeAt(i) !== (str.charCodeAt(i - 1) + 1)) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1)
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghjklmno"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("bcdf"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

  /**
   * Sorted Union
   * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
   * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
   * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
   */

  function uniteUnique(...arr) {
    let finalArr = []
    arr.forEach(item => {
      let tempArr = item
      console.log(tempArr)
      tempArr.forEach(item => {
        if(!finalArr.includes(item)) {
          finalArr.push(item)
        }
      })
    })
  
    return finalArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

  /**
   * Convert HTML Entities
   * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
   * in a string to their corresponding HTML entities.
   */

  function convertHTML(str) {
    let htmlCorrespondings = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      "\"" : "&quot;",
      "'" : "&apos;"
    }
    
    return str.split('').map(item => htmlCorrespondings[item] || item).join('');
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("<>"));
  
  /**
   * Sum All Odd Fibonacci Numbers
   * Given a positive integer num, return the sum of all odd Fibonacci 
   * numbers that are less than or equal to num.
   * The first two numbers in the Fibonacci sequence are 1 and 1. 
   * Every additional number in the sequence is the sum of the two previous numbers. 
   * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
   */

  function sumFibs(num) {
    let next = 1
    let prev = 1
    let result = 1;
    while(next <= num) {
      if(next % 2 !== 0) {
        result += next
      }
      let temp = next  
      next += prev
      prev = temp
    }
    return result;
  }
  
  console.log(sumFibs(10));

  /**
   * Sum All Primes
   * Sum all the prime numbers up to and including the provided number.
   * A prime number is defined as a number greater than one and having only two divisors, 
   * one and itself. For example, 2 is a prime number because it's only divisible by
   *  one and two.
   * The provided number may not be a prime.
   */

  function sumPrimes(num) {
    let sieve = []
    let primes = []
    for(let i = 2; i <= num; i++) {
      if(!sieve[i]) {
        primes.push(i); 
        for(let j = i << 1; j <= num; j+= i) {
          sieve[j] = true;
        }
      }
    }
    return primes.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  
  sumPrimes(10);


  /**
   * Smallest Common Multiple
   * Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
   * as well as by all sequential numbers in the range between these parameters.
   * The range will be an array of two numbers that will not necessarily be in numerical order.
   */

  function smallestCommons(arr) {
    let tempArr = []
    arr.sort((a, b) => {
      return b - a;
    })
    //console.log(arr)
    for(let i = arr[0]; i >= arr[1]; i--) {
      tempArr.push(i)
    }
    //console.log(tempArr)
  
    var result = 0
    var n = 1
    var i = 0
    do{
      result = n * tempArr[0] * tempArr[1]
      console.log(result)
      for(i = 2; i < tempArr.length ; i++) {
        if(result % tempArr[i] !== 0)
          break;
      }
      n++; 
      //console.log(n) 
    }while(i !== tempArr.length)
    return result;
  }
  
  
  console.log(smallestCommons([1,5]));
  //smallestCommons([5,1]);

  /**
   * Drop it
   * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
   * until the function func returns true when the iterated element is passed through it.
   * Then return the rest of the array once the condition is satisfied, otherwise, 
   * arr should be returned as an empty array.
   */

  function dropElements(arr, func) {
    let tempArr = arr.slice()
    for(let  i = 0; i < arr.length; i++) {
      if(func(arr[i])) {
        break;
      } else {
        tempArr.shift()
      }
    }
    arr = tempArr
    return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
  console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

  /**
   * Steamroller
   * Flatten a nested array. You must account for varying levels of nesting.
   */

  function steamrollArray(arr) {
    let resultArr = []
    let recursionArrCheckFunc = (item) => {
      if(!Array.isArray(item)) {
        resultArr.push(item)
      } else
      {
        for(let x in item) {
          recursionArrCheckFunc(item[x])
        }
      }
    } 
    
    recursionArrCheckFunc(arr)
  
    return resultArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  /**
   * Binary Agents
   * Return an English translated sentence of the passed binary string.
   * The binary string will be space separated.
   */

  function binaryAgent(str) {
    let tempArr = str.split(/\W+/);
    let resultArr = []
    //console.log(tempArr)
    for(let index in tempArr) {
      resultArr.push(String.fromCharCode(parseInt(tempArr[index], 2)))
    }
    console.log(resultArr)
    return resultArr.join("")
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  
/**
 * Everything Be True
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * In other words, you are given an array collection of objects. 
 * The predicate pre will be an object property and you need to return true if its value is truthy. 
 * Otherwise, return false.
 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
 */  

function truthCheck(collection, pre) {
  
  return collection.every((item) => {
    return Boolean(item[pre])
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/**
 * Arguments Optional
 * Create a function that sums two arguments together. 
 * If only one argument is provided, then return a function that expects one 
 * argument and returns the sum.
 * If either argument isn't a valid number, return undefined.
 */

function addTogether() {
  let isInt = (item) => {
    if(typeof item === 'number')
      return item;
    else 
      return undefined;  
  }

  if(arguments.length > 1) {
    if(isInt(arguments[0]) === undefined || isInt(arguments[1]) === undefined)
      return undefined;
    else
      return arguments[0] + arguments[1]
  } else {
    let temp = arguments[0]
    if(isInt(temp) !== undefined) {
      return (arg2) => {
        if(isInt(arg2) === undefined) {
          return undefined;
        } else {
          return temp + arg2;
        }
      }
    } else return undefined 
  }
  return false;
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));


/**
 * Make a Person
 * Fill in the object constructor
 */

var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  }

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  }

  this.setFullName = function(name) {
    fullName = name;
  }

  this.getFullName = function() {
    return fullName;
  };

   this.getLastName = function() {
    return fullName.split(" ")[1];
  };

   this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFirstName())

/**
 * Map the Debris
 * Return a new array that transforms the elements' average 
 * altitude into their orbital periods (in seconds).
 */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  let resultArr = []
  for(let i in arr) {
    resultArr.push({name: arr[i].name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt,3) / GM))})
  }
  return resultArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));