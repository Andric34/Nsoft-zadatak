function surrounding_sum(input) {

  // Checking user input
  if (isNaN(input)) {
    return "Your input is not a number. Please input a number from 1 to 100!";
  } else if (input < 1) {
    return "Inputted number is less than 1. Please input a number from 1 to 100!";
  } else if (input > 100) {
    return "Inputted number is greater than 100. Please input a number from 1 to 100!";
  }

  var arr = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  ];

  // Add input to sum
  var sum = input;

  // Cycle through matrix
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {

      // If element is found in matrix
      if (input === arr[i][j]) {

        // Check if element has 8 suraounding elements
        if (i == 0 || i == arr.length - 1 ||
            j == 0 || j == arr[i].length - 1) {
          return "Inputted number doesn't have 8 surrounding numbers.";

        // Calculate sum of 8 surrounding elements
        } else {

          sum += arr[i - 1][j - 1];
          sum += arr[i - 1][j];
          sum += arr[i - 1][j + 1];

          sum += arr[i][j - 1];
          sum += arr[i][j + 1];

          sum += arr[i + 1][j - 1];
          sum += arr[i + 1][j];
          sum += arr[i + 1][j + 1];

          return (
            "Sum of surrounding numbers around the input is equal to : " + sum
          );
        }
      }
    }
  }
};

function changing_rotation_direction() {
  var class_arr = document.getElementById("demo").classList;
  class_arr.toggle("onclick");
}
/* Used to test the function manually 
for (let z = 0; z < 101; z++) {
  console.log("Suranding sum: " + z + " - " + surrounding_sum(z));
  
} 
*/