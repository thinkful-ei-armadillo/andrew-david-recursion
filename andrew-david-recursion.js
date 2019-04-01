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
countSheep(3);
