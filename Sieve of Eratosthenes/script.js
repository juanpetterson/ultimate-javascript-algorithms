function sieveOfEratosthenes(num) {
  let primes = [];
  for (i = 0; i <= num; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      const multiple = i * j;
      primes[multiple] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(sieveOfEratosthenes(20));
