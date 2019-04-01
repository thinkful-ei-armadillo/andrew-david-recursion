function countSheep(num) {
  //Input is the number of sheep to start
  //Output for the program will be numbers plus the string repeated
  //Input to each recursive call will be num - 1
  //The output of each call will be the current num plus a string plus another
  //function call

  //Base case
  if (num === 0) {
    console.log("All sheep jumped over the fence");
    return "";
  }
  console.log(num, ": Another sheep jump over the fence");
  return countSheep(num - 1);
}

function powerCalculator(int, exp) {
  // What is the input to the program? The program takes an integer and an exponent as parameters.
  // What is the output of the program? A number equal to the integer raised to the power of our exponent parameter.
  // What is the input to each recursive call? The input for each recursive call will include the integer and the exponent, which will decrement with each call.
  // What is the output of each recursive call? Each recursive call will return the integer multiplied by another call for our function.

  // integer * recursive call;

  // base case:
  if (!exp) {
    return 1;
  }

  // recursive case
  return int * powerCalculator(int, exp - 1);
}

function reverseString(str) {
  // What is the input to the program? The input is a string
  // What is the output of the program? The reversed string
  // What is the input to each recursive call? The string sliced by one
  // What is the output of each recursive call? A concatenated string with a new recursive call
  // Base case
  if(!str.length){
      return '';
  }
  // Recursive case
  return str.slice(-1) + reverseString(str.slice(0, -1))
}

function triangle(num){
  // What is the input to the program? A number
  // What is the output of the program? A number representing the sum of the input and all integers between it and 0
  // What is the input to each recursive call? The input of each recursive call will be the program input decremented each time
  // What is the output of each recursive call? The current number plus a recursive call

  // base case:

  if(!num){
    return 0;
  }

  // Recursive case:
  return num + triangle(num - 1)
}
