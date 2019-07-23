let nums = [2, 7, 11, 15],
  target = 9;

twoSum = (nums, target) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i];

    if (
      nums.indexOf(target - nums[i]) ||
      nums.indexOf(target - nums[i]) === 0
    ) {
      if (nums.indexOf(target - nums[i]) === -1) {
      }
      console.log(target - nums[i]);
      arr.push(nums.indexOf(target - nums[i]));
    }
  }
  console.log(arr.reverse().filter(i => i > -1));
  return arr.reverse().filter(i => i > -1);
};

twoSum(nums, target);

// [0, 1]

// unfinsihed
