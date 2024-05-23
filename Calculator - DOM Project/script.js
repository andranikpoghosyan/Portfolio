const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const toggle = document.querySelector(".bin_dec");
const circle = document.querySelector(".circle");
const current_clock = document.querySelector(".current_clock");

let isToggled = false;

// էստեղ ուղղակի տվալ պահի ժամն է ցույց տալիս, զուտ iPhone-ի հաշվիչին նման լինելու համար
{
  const hours = new Date().getHours().toString().padStart(2, "0");
  const minutes = new Date().getMinutes().toString().padStart(2, "0");
  current_clock.innerText = `${hours}:${minutes}`;
}

// էստեղ զրոյացնում ենք մեր դիսփլեյը
{
  display.innerText = "0";
}

// Ավելացնում ենք բոլոր կոճակների վրա իվենթներ
{
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.number) {
        appendNumber(button.dataset.number);
      } else if (button.dataset.operator) {
        appendOperator(button.dataset.operator);
      }
    });
  });
}

// նշում ենք թվաբանական գործողությունների համար անհրաժեշտ կոճակների ֆունկցիոնալությունը, թե որ կոճակը սեղմելուց, որ ֆունկցիան պետք է աշխատի
{
  document.getElementById("equals").addEventListener("click", calculateResult);
  document.getElementById("clear").addEventListener("click", clearDisplay);
  document.getElementById("toggle-sign").addEventListener("click", toggleSign);
  document
    .getElementById("percent")
    .addEventListener("click", calculatePercent);
  document.addEventListener("keydown", handleKeyPress);
}

// ավելացնում ենք թվերը դիսփլեյի վրա
{
  function appendNumber(number) {
    if (!isToggled) {
      if (display.innerText == "0" || display.innerText == "Error") {
        display.innerText = number;
      } else {
        display.innerText += number;
      }
    } else {
      /* ավելացնում ենք երկուական համակարգով */
      if (["0", "1"].includes(number)) {
        if (display.innerText == "" || display.innerText == "Error") {
          display.innerText = number;
        } else {
          display.innerText += number;
        }
      }
    }
  }
}

// ավելացնում ենք թվաբանական նշանը դիսփլեյի վրա
{
  function appendOperator(operator) {
    if (display.innerText !== "Error") {
      const lastChar = display.innerText.slice(-1);
      if (["+", "-", "*", "/"].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
      } else {
        display.innerText += operator;
      }
    }
  }
}
// մաքրում ենք դիսփլեյը կատարված գործողուեյունից հետո
{
  function clearDisplay() {
    display.innerText = "0";
  }
}

// Կատարում ենք դիսփլեյում գրված գործողությունը
{
  function calculateResult() {
    try {
      let result;
      if (!isToggled) {
        result = evaluateExpression(display.innerText.replace(/,/g, "."));
      } else {
        result = evalBinary(display.innerText);
      }
      display.innerText = result;
    } catch (e) {
      display.innerText = "Error";
    }
  }
}

// Հաշվարկում ենք տասական համակարգով թվաբանական գործողության արժեքը

{
  function evaluateExpression(expression) {
    const tokens = expression.match(/(\d+|\D)/g);
    const stack = [];
    let currentNumber = "";

    tokens.forEach((token) => {
      if (!isNaN(token)) {
        currentNumber += token;
      } else {
        if (currentNumber) {
          stack.push(Number(currentNumber));
          currentNumber = "";
        }
        stack.push(token);
      }
    });

    if (currentNumber) {
      stack.push(Number(currentNumber));
    }

    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    const operatorStack = [];
    const valueStack = [];

    stack.forEach((token) => {
      if (typeof token == "number") {
        valueStack.push(token);
      } else {
        while (
          operatorStack.length &&
          precedence(operatorStack[operatorStack.length - 1]) >=
            precedence(token)
        ) {
          const op = operatorStack.pop();
          const b = valueStack.pop();
          const a = valueStack.pop();
          valueStack.push(operators[op](a, b));
        }
        operatorStack.push(token);
      }
    });

    while (operatorStack.length) {
      const op = operatorStack.pop();
      const b = valueStack.pop();
      const a = valueStack.pop();
      valueStack.push(operators[op](a, b));
    }

    return valueStack[0];
  }
}

// Սահմանում ենք օպերատորի գերակայությունը
{
  function precedence(op) {
    return op == "+" || op == "-" ? 1 : 2;
  }
}

// հաշվարկում ենք երկուական համակարգի գործողությունը
{
  function evalBinary(expression) {
    const operators = /[+\-*\/]/g;
    const parts = expression.split(operators);
    const operator = expression.match(operators)[0];
    const binaryOp = {
      "+": (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2),
      "-": (a, b) => (parseInt(a, 2) - parseInt(b, 2)).toString(2),
      "*": (a, b) => (parseInt(a, 2) * parseInt(b, 2)).toString(2),
      "/": (a, b) => Math.floor(parseInt(a, 2) / parseInt(b, 2)).toString(2),
    };
    return binaryOp[operator](parts[0], parts[1]);
  }
}

// ընթացիկ նշանի փոփոխությունը էկրանի վրա

{
  function toggleSign() {
    if (display.innerText !== "0" && display.innerText !== "Error") {
      if (display.innerText.startsWith("-")) {
        display.innerText = display.innerText.substring(1);
      } else {
        display.innerText = "-" + display.innerText;
      }
    }
  }
}

// Հաշվում ենք տոկոսը
{
  function calculatePercent() {
    if (display.innerText !== "Error") {
      display.innerText = String(parseFloat(display.innerText) / 100);
    }
  }
}

// Նշանակում ենք ստեղնաշարի թվերի սեղմումը
{
  function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key)) {
      appendNumber(key);
    } else if (key == "+" || key == "-" || key == "*" || key == "/") {
      appendOperator(key);
    } else if (key == "Enter") {
      calculateResult();
    } else if (key == "Escape") {
      clearDisplay();
    } else if (key == "%") {
      calculatePercent();
    } else if (key == ".") {
      appendOperator(".");
    } else if (key == "Backspace") {
      if (display.innerText.length == 1) {
        display.innerText = "";
      } else {
        display.innerText = display.innerText.slice(0, -1);
      }
    }
  }
}

// Անցում դեցիմալից երկուականի
{
  function decimalToBinary(decimal) {
    return parseInt(decimal, 10).toString(2);
  }
}
// Անցում երկուականից տասականի
{
  function binaryToDecimal(binary) {
    return parseInt(binary, 2).toString(10);
  }
}

// Ռեժմների փոփոխություն
toggle.addEventListener("click", () => {
  circle.classList.toggle("toggled");
  toggle.classList.toggle("active");
  isToggled = !isToggled;

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    if (isToggled) {
      if (
        (button.dataset.number &&
          !["0", "1"].includes(button.dataset.number)) ||
        (button.dataset.operator &&
          !["=", "-", "%", "AC", "+/-", "/", "*", "+"].includes(
            button.dataset.operator
          ))
      ) {
        button.disabled = true;
        button.classList.add("disable_digit");
      } else {
        button.disabled = false;
      }
    } else {
      button.disabled = false;
      button.classList.remove("disable_digit");
    }
  });

  // փոփոխությունը մի ռեժիմից մյուսին կախված թե դիսփլեյի վրա ինչ է գրված
  if (isToggled) {
    if (/^\d+$/.test(display.innerText)) {
      display.innerText = decimalToBinary(display.innerText);
    }
  } else {
    if (/^[01]+$/.test(display.innerText)) {
      display.innerText = binaryToDecimal(display.innerText);
    }
  }
});
