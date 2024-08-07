export const SelectionSort = (array) => {
    const length = array.length;
    let animations = [];
    for (let i = 0; i < length; ++i) {
        let min=i;
        for(let j=i;j<length;j++){
            if(array[min]>array[j]){
                min=j;
            }
        }
        animations.push([i, min, array[i], array[min]]);
        let cache = array[i];
        array[i] = array[min];
        array[min] = cache;
    }
    return animations;
  };
  