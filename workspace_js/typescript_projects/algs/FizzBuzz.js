/**
 *  Print the integers from 1 to 100(inclusive)
 *
 * For multiples of three, print Fizz instead of number
 * For multiples of five, print Buzz instead of number
 * For multiples of both, print FizzBuzz instead of number
 */
for (var i = 1; i <= 100; i++) {
    /*
    if(i % 3 == 0 && i % 5 ==0) {
       console.log("FizzBuzz");
    } else if(i % 5 == 0) {
       console.log("Buzz");
    } else if(i % 3 == 0) {
       console.log("Fizz");
    } else {
        console.log(i);
    }*/
    var isFizz = i % 3 === 0;
    var isBuzz = i % 5 === 0;
    var result = isFizz && isBuzz ?
        'FizzBuzz' :
        isBuzz ?
            'Buzz' :
            isFizz ?
                'Fizz' :
                i;
    console.log(result);
}
