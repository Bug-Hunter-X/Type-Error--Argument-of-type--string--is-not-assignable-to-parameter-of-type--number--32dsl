function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error('Invalid input: Both arguments must be numbers.');
    return 0; // Or handle the error appropriately
  }
}

const result1 = addSafe(1, '2'); //Prints error message, returns 0
const result2 = addSafe(1, 2); //Returns 3
const result3 = addSafe(1, 2 as number); //Returns 3, type assertion