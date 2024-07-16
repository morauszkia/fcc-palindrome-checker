textInputEl = document.getElementById("text-input");
checkBtnEl = document.getElementById("check-btn");
resultTextEl = document.getElementById("result");

const reverseString = (original) => original.split("").reverse().join("");

const isPalindrome = (input) => {
  const strippedAndLowerCase = input
    .replaceAll(/[^\p{L}0-9]/gu, "")
    .toLowerCase();

  return strippedAndLowerCase == reverseString(strippedAndLowerCase);
};

const handleInput = (e) => {
  e.preventDefault();

  const input = textInputEl.value;

  if (input.trim().length === 0) {
    resultTextEl.textContent = "Please input a value";
  } else if (isPalindrome(input)) {
    resultTextEl.textContent = `${input} is a palindrome`;
  } else {
    resultTextEl.textContent = `${input} is not a palindrome`;
  }
};

checkBtnEl.addEventListener("click", handleInput);