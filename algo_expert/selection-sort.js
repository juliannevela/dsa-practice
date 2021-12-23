function selectionSort(array) {
  console.log('input array: ', array);
  let currentIdx = 0; // current index
  // input array: [3, 4, 2, 1, 6]

  while (currentIdx < array.length - 1) {
    // initialize min value to current idx;
    // iterate through array and compare currentIdx to minIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      let min = currentIdx; // initialize min to current idx;
      console.log(
        `current index: array[${currentIdx}] (${array[currentIdx]})\nmin: array[${min}] (${array[min]})`
      );
      console.log(
        `is the min value at array[${min}] greater than the check value at: array[${i}]?`
      );
      if (array[min] > array[i]) {
        // if current min is greater than i, set i to new minIdx;
        console.log(
          `Yes. (${array[min]}) > (${array[i]}) so minIdx is now ${i}.`
        );
        min = i;
        console.warn('-------------------');
      } else {
        console.log(`No. Min remains at array[${min}]`);
        console.log('-----------------');
      }

      swap(currentIdx, min, array);
      currentIdx += 1;
    }

    console.log('output array: ', array);

    return array;
  }
}

function swap(current, minIdx, array) {
  // Save the value @ minIdx into a temp variable;
  console.log(
    `    Step 1: Save temp value of minIdx (${minIdx}): `,
    array[minIdx]
  );
  let temp = array[minIdx]; // 2 (2);

  // Set the value @ minIdx to be the value @ currentIdx
  console.log(
    `    Step 2: array[${minIdx}] gets updated to currentIdx value at array[${current}]`
  );
  console.log(`    verify: ${array[minIdx]} is now ${array[current]}`);
  array[minIdx] = array[current]; // 2 => 8

  // Last set value @ currentIdx to be temp variable saved before (previously min value)
  console.log(
    `    Step 3: currentIdx array[${current}] gets updated to temp (previously set min value) (${temp})`
  );
  console.log(`    verify: ${array[current]} is now ${temp}`);
  array[current] = temp; // 8 => 2
  console.log(`    Sorted array: ${array}`);
  console.warn('-------------------');
}
