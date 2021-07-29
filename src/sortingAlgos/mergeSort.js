export function getMergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const helperArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, helperArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startInd,
    endInd,
    helperArray,
    animations,
  ) {
    if (startInd === endInd) return;
    const middleInd = Math.floor((startInd + endInd) / 2);
    mergeSortHelper(helperArray, startInd, middleInd, mainArray, animations);
    mergeSortHelper(helperArray, middleInd + 1, endInd, mainArray, animations);
    doMerge(mainArray, startInd, middleInd, endInd, helperArray, animations);
  }
  
  function doMerge(
    mainArray,
    startInd,
    middleInd,
    endInd,
    helperArray,
    animations,
  ) {
    let k = startInd;
    let i = startInd;
    let j = middleInd + 1;
    while (i <= middleInd && j <= endInd) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      // animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (helperArray[i] <= helperArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, helperArray[i]]);
        mainArray[k++] = helperArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, helperArray[j]]);
        mainArray[k++] = helperArray[j++];
      }
    }
    while (i <= middleInd) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      // animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, helperArray[i]]);
      mainArray[k++] = helperArray[i++];
    }
    while (j <= endInd) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      // animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, helperArray[j]]);
      mainArray[k++] = helperArray[j++];
    }
  }