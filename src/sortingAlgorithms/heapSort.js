export const HeapSort = (array) => {
  const length = array.length;
  let animations = [];
  for (let index = Math.ceil(length / 2) - 1; index >= 0; --index) {
    heapify(animations, array, length, index);
  }
  for (let index = length - 1; index >= 0; --index) {
    animations.push([index, 0, array[index], array[0]]);
    let temp = array[index];
    array[index] = array[0];
    array[0] = temp;
    heapify(animations, array, index, 0);
  }
  return animations;
};

const heapify = (animations, array, length, index) => {
  let largest = index;
  let left = 2 * index + 1,
    right = 2 * index + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }
  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    animations.push([index, largest, array[index], array[largest]]);
    let temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;
    heapify(animations, array, length, largest);
  }
};
