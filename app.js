const display = document.querySelector("#input_display");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const doubleZero = document.querySelector("#double-zero");
const dotButton = document.querySelector("#dot");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

window.addEventListener("click", function (e) {
  const key = e.target.value;

  if (key === "AC") {
    display.value = " ";
  } else if (key === "DE") {
    display.value = display.value.slice(0, -1);
  } else if (key === ".") {
    if (!display.value.includes(".")) {
      display.value += ".";
    }
  } else if (key === "/") {
    display.value += "/";
  } else if (key === "*") {
    display.value += "*";
  } else if (key === "-") {
    display.value += "-";
  } else if (key === "+") {
    display.value += "+";
  }
  if (key === "Enter" || key === "=") {
    display.value = eval(display.value);
  } else if (key === "00") {
    display.value += "00";
  } else if (key === "0") {
    display.value += "0";
  } else if (key === "1") {
    display.value += "1";
  } else if (key === "2") {
    display.value += "2";
  } else if (key === "3") {
    display.value += "3";
  } else if (key === "4") {
    display.value += "4";
  } else if (key === "5") {
    display.value += "5";
  } else if (key === "6") {
    display.value += "6";
  } else if (key === "7") {
    display.value += "7";
  } else if (key === "8") {
    display.value += "8";
  } else if (key === "9") {
    display.value += "9";
  }
});

window.addEventListener("keydown", function (e) {
  const key = e.key;

  if (key === "Delete") {
    display.value = " ";
    setTimeout(() => {
      clearButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      clearButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
    setTimeout(() => {
      deleteButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      deleteButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === ".") {
    if (!display.value.includes(".")) {
      display.value += ".";
      setTimeout(() => {
        dotButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
      }, 1);
      setTimeout(() => {
        dotButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
      }, 200);
    }
  } else if (key === "/") {
    display.value += "/";
    setTimeout(() => {
      divideButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      divideButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "*") {
    display.value += "*";
    setTimeout(() => {
      multiplyButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      multiplyButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "-") {
    display.value += "-";
    setTimeout(() => {
      subtractButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      subtractButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "+") {
    display.value += "+";
    setTimeout(() => {
      addButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      addButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "Enter" || key === "=") {
    display.value = eval(display.value);
    setTimeout(() => {
      equalButton.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      equalButton.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "0") {
    display.value += "0";
    setTimeout(() => {
      zero.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      zero.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "1") {
    display.value += "1";
    setTimeout(() => {
      one.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      one.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "2") {
    display.value += "2";
    setTimeout(() => {
      two.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      two.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "3") {
    display.value += "3";
    setTimeout(() => {
      three.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      three.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "4") {
    display.value += "4";
    setTimeout(() => {
      four.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      four.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "5") {
    display.value += "5";
    setTimeout(() => {
      five.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      five.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "6") {
    display.value += "6";
    setTimeout(() => {
      six.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      six.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "7") {
    display.value += "7";
    setTimeout(() => {
      seven.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      seven.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "8") {
    display.value += "8";
    setTimeout(() => {
      eight.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      eight.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  } else if (key === "9") {
    display.value += "9";
    setTimeout(() => {
      nine.style.boxShadow = "-2px -2px 6px  rgb(0, 0, 0)";
    }, 1);
    setTimeout(() => {
      nine.style.boxShadow = "-5px -5px 6px  rgb(0, 0, 0)";
    }, 200);
  }
});
