export const QuickSort = (array) => {
  const length = array.length;
  let animations = [];
  divider(animations, array, 0, length - 1);
  return animations;
};

const divider = (animations, array, start, end) => {
  if (start < end) {
    let pivot = partition(animations, array, start, end);
    divider(animations, array, start, pivot - 1);
    divider(animations, array, pivot + 1, end);
  }
};

const partition = (animations, array, start, end) => {
  let prevIndex = start - 1;
  for (let index = start; index < end; ++index) {
    if (index !== end) {
    }
    if (array[index] < array[end]) {
      ++prevIndex;
      animations.push([index, prevIndex, array[index], array[prevIndex]]);
      let cache = array[index];
      array[index] = array[prevIndex];
      array[prevIndex] = cache;
    }
  }
  animations.push([end, prevIndex + 1, array[end], array[prevIndex + 1]]);
  let cache = array[prevIndex + 1];
  array[prevIndex + 1] = array[end];
  array[end] = cache;
  return prevIndex + 1;
};

