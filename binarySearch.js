function binarySearch(array, target) {
    // initialize left and right pointers
    let left = 0;
    let right = array.length - 1;
    // while left is less than or equal to right
    while (left <= right) {
        // find the middle index
        let middle = Math.floor((left + right) / 2);

        // compare target value to middle point value
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            // if target is greater than middle, search right side
            left = middle + 1;
        } else {
            // if target is less than middle, search left side
            right = middle - 1;
        }
    }
    return -1;
}

// Test cases:
const tests = [
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 5,
        result: 4,
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 1,
        result: 0,
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 10,
        result: 9,
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 3,
        result: 2,
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 8,
        result: 7,
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 0,
        result: -1,
    },
    {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 11,
        result: -1,
    },
];

tests.forEach((test) => {
    const { array, target } = test;
    const result = binarySearch(array, target);
    if (result === test.result) {
        console.log(
            `PASS: ${array} should return ${test.result} when searching for ${target}`
        );
    } else {
        console.log(
            `FAIL: ${array} should return ${test.result} when searching for ${target}`
        );
    }
});
