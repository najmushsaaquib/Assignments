let n = 2;

function printN(n) {
  if (n == 0) return;

  console.log(n); //Pre

  printN(n - 1);

  console.log(n); // Mid (IN)

  printN(n - 1);

  console.log(n); //Post
}

printN(n);
