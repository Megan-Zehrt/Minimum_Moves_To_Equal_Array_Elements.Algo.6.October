// 453. Minimum Moves to Equal Array Elements



// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

 





/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // Step 1: Find the minimum element in the array
    let minElement = Math.min(...nums);

    // Step 2: Calculate the total number of moves needed to make all elements equal to minElement
    let moves = 0;
    for (let num of nums) {
        moves += num - minElement;
    }

    return moves;
};
