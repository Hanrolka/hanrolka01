// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum of numbers in an array
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Calculate the sum of numbers array
const sum = calculateSum(numbers);
console.log("The sum of numbers is:", sum);