// 1. Write a JavaScript function to calculate the sum of two numbers.

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 9));

// 2. Write a JavaScript program to find the maximum number in an array.

let arr = [67, 80, 56, 99, 4];

function maximumNum(arr) {
  return Math.max(...arr);
}

console.log(maximumNum(arr));

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function checkPalindrome(str) {
  return str === str.split("").reverse().join("")
    ? `${str} is palindrome`
    : `${str} is not palindrome`;
}
console.log(checkPalindrome("abba"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("5665"));

// 4. Write a JavaScript program to reverse a given string.

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hello"));

// 5.  Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

let numArr = [4, 7, 65, 8, 72, 576, 39, 27, 54];

function findEven(numArr) {
  return numArr.filter((num) => num % 2 === 0);
}
console.log(findEven(numArr));

// 6. Write a JavaScript program to calculate the factorial of a given number.

function factorial(num) {
  let ans = 1;
  for (let i = 2; i <= num; i++) {
    ans = ans * i;
  }
  return ans;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(2));

// 7. Write a JavaScript function to check if a given number is prime.

function findPrimeNum(num) {
  //return num % num === 0 &&
  if (num % num === 0 && num / num === 1) {
    return console.log("prime");
  } else {
    return console.log("not prime");
  }
}

console.log(findPrimeNum(76));
console.log(findPrimeNum(7));
