let currentInput = "";  

function updateScreen() {
  const screen = document.getElementById("screen");
  screen.textContent = currentInput || "0";
}

function addNumber(num) {
  currentInput += num;
  updateScreen();
}

function addOperator(op) {
  if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += ` ${op} `;
  }
  updateScreen();
}

function backspace() {
  currentInput = currentInput.trim().slice(0, -1);
  updateScreen();
}

function clearAll() {
  currentInput = "";
  updateScreen();
}

function calculate() {
  try {
    let result = eval(currentInput.replace("×", "*").replace("÷", "/"));
    currentInput = Math.round(result * 100) / 100;  // Округлення до двох знаків
  } catch (error) {
    currentInput = "Error";
  }
  updateScreen();
}
