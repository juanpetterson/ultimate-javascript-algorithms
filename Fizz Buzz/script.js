function fizzBuzz(num) {
  for (i = 1; i <= num; i++) {
    // if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    // because to be divisible by 3 and 5 need to be multiple of 15, what is 3 * 5
    if (i % 15 === 0) console.log('FizzBuzz', i);
    else if (i % 3 === 0) console.log('Fizz', i);
    else if (i % 5 === 0) console.log('Buzz', i);
    else console.log(i);
  }
}

fizzBuzz(30);
