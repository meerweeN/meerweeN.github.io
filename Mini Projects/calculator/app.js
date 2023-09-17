const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calculatorDisplay");
const operators = ["/", "*", "+", "-"];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue == "C") {
    output = "";
  } else {
    if (output === "" && operators.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (d) => calculate(d.target.dataset.value));
});
