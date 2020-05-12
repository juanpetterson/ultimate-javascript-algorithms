function fibonacciMemo(index, cache = []) {
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] =
        fibonacciMemo(index - 1, cache) + fibonacciMemo(index - 2, cache);
    }
  }

  return cache[index];
}

console.log(fibonacciMemo(12));
