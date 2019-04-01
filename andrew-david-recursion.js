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

function powerCalculator(int, exp){
  // What is the input to the program? The program takes an integer and an exponent as parameters. 
  // What is the output of the program? A number equal to the integer raised to the power of our exponent parameter. 
  // What is the input to each recursive call? The input for each recursive call will include the integer and the exponent, which will decrement with each call. 
  // What is the output of each recursive call? Each recursive call will return the integer multiplied by another call for our function.

  // integer * recursive call; 

  // base case:
  if(!exp){
    return 1;
  } 

  // recursive case
  return int * powerCalculator(int, exp -1)
}