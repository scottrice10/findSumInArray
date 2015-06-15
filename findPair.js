/**
 * Returns true if any pair in array of integers add up to target sum
 * Otherwise, returns false
 * Time complexity is n*log(n) because solution requires sorting inputted array
 *
 * Implementation:
 * 1) sort inputted array
 * 2) set pointer at min and max values
 * 3) move pointers closer together until target sum found or until pointers overlap
 * @param intArr
 * @param targetSum
 * @returns {boolean}
 */
function findPair(intArr, targetSum) {

    // Could also use intArr.sort(function(a, b){return a-b}) to sort array
    var sorted = mergeSort(intArr);

    var leftIndex = 0;
    var rightIndex = intArr.length - 1;

    // Start pointers and minimum and maximum values in sorted array
    // If sum of values equals target sum, solution found and return
    // If sum less than target sum, need sum to be greater, so increment left index to greater value in sorted array
    // If sum greater than target sum, need sum to be less, so decrement right index to smaller value in sorted array
    while (leftIndex < rightIndex) {
        var sum = sorted[leftIndex] + sorted[rightIndex];

        if (sum === targetSum) {
            return true;
        }

        if (sum < targetSum) {
            leftIndex += 1;
            continue;
        }

        if (sum > targetSum) {
            rightIndex -= 1;
        }
    }

    return false;
}

// Time complexity of mergeSort: n*log(n)
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var leftIndex = 0;
    var rightIndex = 0;
    var result = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(right[rightIndex]);
            rightIndex += 1;
        } else {
            result.push(left[leftIndex]);
            leftIndex += 1;
        }
    }

    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}
