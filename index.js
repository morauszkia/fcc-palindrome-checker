const textInputEl = document.getElementById("text-input");
const checkBtnEl = document.getElementById("check-btn");
const resultTextEl = document.getElementById("result");

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

  resultTextEl.innerHTML = "";

  if (input.trim().length === 0) {
    resultTextEl.textContent = "Please input a value";
  } else if (isPalindrome(input)) {
    resultTextEl.innerHTML = `<span class="highlight">${input}</span> is a palindrome`;
  } else {
    resultTextEl.innerHTML = `<span class="highlight">${input}</span> is not a palindrome`;
  }

  textInputEl.value = "";
  checkBtnEl.blur();
};

checkBtnEl.addEventListener("click", handleInput);
