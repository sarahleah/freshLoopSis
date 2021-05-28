const loop = (value, test, update, body) => {
  if (test(value) == true) {
    body(value);
    value = update(value);
    loop(value, test, update, body);
  } 
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1