/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

//     [2,7,11,15]
//     9
    // [[2,7],[2,11],[2,15],[2,15]]
    
    let theList = [];
    for (var p = 0; p < nums.length; p++) {
        for (var s = 0; s < nums.length; s++) {
            if (p != s) {
                if (nums[p] + nums[s] == target) {
                    return [s,p]
                }
                // theList.push([nums[p],nums[s]])
            }
        }
    }
// return theList

};

