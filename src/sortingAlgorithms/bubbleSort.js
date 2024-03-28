export const bubbless = (array) => {
  const sortedArray = array;
  const animations = [];
  for (var i = 0; i < sortedArray.length; i++) {
    for (var j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        var temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        animations.push([j + 1, j, sortedArray[j], sortedArray[j + 1]]);
      }
    }
    let m = sortedArray.length - i - 1;
    console.log(m);
  }
  return animations;
};
