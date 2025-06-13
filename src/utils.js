export const __DEV__ = process.env.NODE_ENV === "development";

export function shuffle(arr) {
  let array = [...arr];
  // thanks https://stackoverflow.com/a/6274398/818492
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function time() {
  return new Date();
}

export function isDefined(val) {
  return val !== null && val !== undefined;
}

export function isNonemptyString(val) {
  return isDefined(val) && typeof val === "string" && val.length > 0;
}

export let noop = () => {};