/**
 * Convert Celsius to Fahrenheit
 * The algorithm to convert from Celsius to Fahrenheit 
 * is the temperature in Celsius times 9/5, plus 32.
 */

function convertCToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);

/**
 * Reverse a String
 */
function reverseString(str) {
    let newStr = "";
    for(let i = (str.length - 1); i >= 0; i--)
      newStr += str[i];
    return newStr;
  }
  
  console.log(reverseString("hello"));

/**
 * Factorialize a Number
 */
function factorialize(num) {
    let fact = 1;
    while(num > 1) {
      fact *= num;
      num--; 
    }
    return fact;
  }
  
  factorialize(5);

  /**
   * Find the Longest Word in a String
   * Return the length of the longest word in the provided sentence
   */
  function findLongestWordLength(str) {
    let arr = str.split(" ")
    let wordLength = 0;
    for(let elem in arr){
      if(arr[elem].length > wordLength)
        wordLength = arr[elem].length
    }
    return wordLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  /**
   * Return Largest Numbers in Arrays
   */
  function largestOfFour(arr) {
  
    let largestNumbersArr = [];
    for(let i = 0; i < arr.length; i++){
      let tempLargest = arr[i][0];
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > tempLargest) {
          tempLargest = arr[i][j];
        }
      }
      largestNumbersArr.push(tempLargest)
    }
    return largestNumbersArr;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  /**
   * Confirm the Ending
   * .endsWith() method, which was introduced in ES2015
   */

  function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");

  /**
   * Repeat a String Repeat a String
   * Repeat a given string str (first argument) for num times (second argument). 
   * Return an empty string if num is not a positive number.
   */

  function repeatStringNumTimes(str, num) {
    let resultStr = "";
    while(num > 0){
        resultStr += str;
        num--;
    }
    return resultStr;   
  }
  
  repeatStringNumTimes("abc", 3);

  /**
   * Truncate a String
   */
  function truncateString(str, num) {
    if(str.length > num)
      return str.slice(0, num) + "...";
    else  
      return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  /**
   * Finders Keepers
   * Create a function that looks through an array (first argument) and returns the 
   * first element in the array that passes a truth test (second argument). 
   * If no element passes the test, return undefined.
   */
  function findElement(arr, func) {
    let num = 0;
    for(let elem in arr){
      if(func(arr[elem]))
        return arr[elem];
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  /**
   * Boo who
   * Check if a value is classified as a boolean primitive. Return true or false.
   */
  function booWho(bool) {
    return bool === true || bool === false ? true: false;
  }
  
  booWho(null);

  /**
   * Title Case a Sentence 
   */
  function titleCase(str) {
    let tempArr = str.split(" ")
    let resultArr = []
    for(let elem in tempArr){
      tempArr[elem] = tempArr[elem].toLowerCase();
      resultArr.push(tempArr[elem].charAt(0).toUpperCase() + tempArr[elem].substring(1));
      
    }
    return resultArr.join(" ");
  }
  
  
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

  /**
   * Slice and Splice
   * Begin inserting elements at index n of the second array.
   * Return the resulting array. The input arrays should remain the same after the function runs
   */
  function frankenSplice(arr1, arr2, n) {
    let tempArr = arr2.slice()
    let resultArr = []
    resultArr = tempArr.slice(0, n)// + arr1 + tempArr
    resultArr.push(arr1)
    resultArr.push(tempArr.splice(n, tempArr.length))
    resultArr.slice
    return resultArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  console.log(frankenSplice([1, 2], ["a", "b"], 1));
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));

  /**
   * Falsy Bouncer
   */
  function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));
  console.log(bouncer([1, null, NaN, 2, undefined]));

  /**
   *Return the lowest index at which a value (second argument) should be inserted into 
   *an array (first argument) once it has been sorted. 
   *The returned value should be a number.
   */
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => {
      return a - b;
    });
    console.log(arr);
    let index = arr.length;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] >= num){
        index = i
        break;
      }
    }
    return index;
  }
  
  //console.log(getIndexToIns([40, 60], 50));
  console.log(getIndexToIns([10, 20, 40, 30, 50], 30));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

  /**
   * Mutations
   * Return true if the string in the first element of the array contains 
   * all of the letters of the string in the second element of the array.
   */
  function mutation(arr) {
    //let tempStr1 = arr[0].toLowerCase();
    //let tempStr2 = arr[1].toLowerCase();
    let tempArr1 = arr[0].toLowerCase().split("")
    let tempArr2 = arr[1].toLowerCase().split("")
    console.log(tempArr1 + '\n' + tempArr2)
    for(let elem in tempArr2){
      if(tempArr1.indexOf(tempArr2[elem]) == -1)
        return false;
    }
  
    return true;
  }
  
  mutation(["Hello", "hey"]);
  
  /**
   * Chunky Monkey
   *  function that splits an array (first argument) into groups the length 
   * of size (second argument) and returns them as a two-dimensional array.
   */
  function chunkArrayInGroups(arr, size) {
    let resultArr = []
    for(let i = 0; i < arr.length; i+=size) {
      console.log(i)
      console.log(arr.slice(i, i + size))
      resultArr.push(arr.slice(i, i + size))
    }
    return resultArr;
  }
  
  //chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  //chunkArrayInGroups(["a", "b", "c", "d"], 2);