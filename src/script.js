function calculate(operation) {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  let result;

  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById('result').textContent = 'Please enter valid numbers';
    return;
  }

  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
      break;
    default:
      result = 'Unknown operation';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}


