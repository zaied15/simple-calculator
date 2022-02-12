const display = document.getElementById("display");
const displayResult = document.getElementById("display-result");

// Display Input Number
const calculate = (number) => {
  display.value += number;
};

// Calculate Function
const result = () => {
  try {
    displayResult.value = eval(display.value);
  } catch (err) {
    alert("Enter valid input");
  }
};

// Clear All
const clearAll = () => {
  display.value = "";
  displayResult.value = "";
};

// Delete number
const deleteNumber = () => {
  display.value = display.value.slice(0, -1);
  try {
    displayResult.value = eval(display.value);
    if (displayResult.value === "undefined") {
      displayResult.value = 0;
    }
  } catch (err) {
    return 0;
  }
};
