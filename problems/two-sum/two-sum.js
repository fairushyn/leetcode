/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {

    let map = new Map();
    let len = nums.length;

    for (let i = 0; i < len; i++) {   //  {2, 7, 11, 15};
        let value = nums[i];
        if (map.has(value)) {  //
            let existedValue = map.get(nums[i]);
            return [existedValue, i];
        } else {
            map.set(target - nums[i], i);
        }
    }
};

nums = [2, 7, 11, 15]
target = 9

console.log('Input: nums = [2, 7, 11, 15] target = 9');
console.log('Output:', twoSum(nums, target));
