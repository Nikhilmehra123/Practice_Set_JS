// What is the role of break and continue statements?

// Break statement is used to come out of the current loop.
// The continue statment continues the current loop with a new recurrence.

function isNikhil() {
  for (let i = 0; i < 10; i++) {
    if (i == 6) {
      break;
    }
    if (i == 4) {
      continue;
    }

    console.log(i);
  }
}
isNikhil();
