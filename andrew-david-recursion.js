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
  if (!str.length) {
    return "";
  }
  // Recursive case
  return str.slice(-1) + reverseString(str.slice(0, -1));
}

function triangle(num) {
  // What is the input to the program? A number
  // What is the output of the program? A number representing the sum of the input and all integers between it and 0
  // What is the input to each recursive call? The input of each recursive call will be the program input decremented each time
  // What is the output of each recursive call? The current number plus a recursive call

  // base case:

  if (!num) {
    return 0;
  }

  // Recursive case:
  return num + triangle(num - 1);
}

function stringSplitter(str, separator) {
  // What is the input to the program? A string and a separator like " "
  // What is the output of the program? The string with the separator removed
  // What is the input to each recursive call? The current version + the separator
  // What is the output of each recursive call? A character that is not the separator or an empty string

  // Base case
  if (!str.length) {
    return "";
  }
  if (str[0] === separator) {
    return stringSplitter(str.slice(1), separator);
  }
  return str[0] + stringSplitter(str.slice(1), separator);
}

function fibonacciArr(num) {
  // What is the input to the program? A number
  // What is the output of the program? A sequence of numbers
  // What is the input to each recursive call?  A number
  // What is the output of each recursive call? A string containing a number

  // base case
  if (num === 1) {
    return [0, 1];
  } else {
    let fib = fibonacciArr(num - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}
function fibonacci(num, count = 0, arr = []) {
  // What is the input to the program? A number
  // What is the output of the program? A sequence of numbers
  // What is the input to each recursive call?  A number
  // What is the output of each recursive call? A string containing a number

  // base case
  if (num <= 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function factorial(num) {
  // What is the input to the program? A number
  // What is the output of the program? A number representing the factorial of a number
  // What is the input to each recursive call? The input of each recursive call will be the program input decremented each time
  // What is the output of each recursive call? The current number times a recursive call

  // base case:

  if (!num) {
    return 1;
  }

  // Recursive case:
  return num * factorial(num - 1);
}

function getOut(maze, y = 0, x = 0) {
  // What is the input to the program? An array representing a maze
  // What is the output of the program? A string containing the solution to the maze
  // What is the input to each recursive call? Maze, current position represented as y and x variables,
  // What is the output of each recursive call? A string containing the direction of travel and another recursive call

  // base case
  // if our current space is an e, return ''
  if (maze[y][x] === "e") {
    return "";
  }

  if (maze[y + 1][x] === " " || maze[y + 1][x] === "e") {
    return "d" + getOut(maze, y + 1, x);
  }

  if (maze[y][x + 1] === " " || maze[y][x + 1] === "e") {
    return "r" + getOut(maze, y, x + 1);
  }
}

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

function superGetOut(maze, y = 0, x = 0) {
  //base case
  if (maze[y][x] == "e") {
    return "";
  }
  //moving down
  if (maze[y + 1][x] === " " || maze[y + 1][x] === "e") {
    return "d" + superGetOut(maze, y + 1, x);
  }
  //moving right
  if (maze[y][x + 1] === " " || maze[y][x + 1] === "e") {
    return "r" + superGetOut(maze, y, x + 1);
  }
  //moving left
  if (maze[y][x - 1] === " " || maze[y][x - 1] === "e") {
    return "l" + superGetOut(maze, y, x - 1);
  }
  //moving up
  if (maze[y - 1][x] === " " || maze[y - 1][x] === "e") {
    return "u" + superGetOut(maze, y - 1, x);
  }
}
