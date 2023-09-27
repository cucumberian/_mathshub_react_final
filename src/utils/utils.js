/**
 * generate random number in range [a, b)
 * @param {int} a
 * @param {int} b
 * @returns int
 */
function randInt(a, b) {
  if (b === undefined) {
    [a, b] = [0, a];
  }
  if (a > b) {
    [b, a] = [a, b];
  }
  return Math.floor(Math.random() * (b - a) + a);
}

/**
 * Create copy of arr and random shuffle it
 * @param {*} arr
 * @returns shuffled cloned array
 */
function shuffle(arr) {
  const arr_copy = structuredClone(arr);
  for (let i = arr_copy.length - 1; i > 0; i--) {
    const rand_ind = randInt(0, i); // случайный индекс [0, i)
    // меняем местами последний элемент со случайно выбранным
    // может случиться что будет выбран последний
    [arr_copy[i], arr_copy[rand_ind]] = [arr_copy[rand_ind], arr_copy[i]];
  }
  return arr_copy;
}

export { shuffle };
