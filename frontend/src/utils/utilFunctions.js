export const randomMinMax = (min, max) => {
  let num = 0;
  while (true) {
    num = Math.floor(Math.random() * max);
    if (num >= min) {
      break;
    }
  }
  return num;
};