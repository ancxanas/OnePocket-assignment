//function takes array of numbers as an argument and returns the sum of all numbers
const addNumbers = (nums) => nums.reduce((acc, curr) => acc + curr, 0)

module.exports = addNumbers
