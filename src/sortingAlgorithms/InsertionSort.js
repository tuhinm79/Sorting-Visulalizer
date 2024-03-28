export const InsertionSort = (array) => {
  console.log(array);
  const length = array.length;
  let animations = [];
  for (let i = 0; i < length - 1; ++i) {
    let j = i;
    while (j >= 0 && array[j] > array[j + 1]) {
      animations.push([j, j + 1, array[j], array[j + 1]]);
      let cache = array[j + 1];
      array[j + 1] = array[j];
      array[j] = cache;
      --j;
    }
  }
  console.log(array);
  return animations;
};
