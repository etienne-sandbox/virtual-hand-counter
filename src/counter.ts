import { createElement } from "./utils";

export function createCounter() {
  const counter = createElement("div");
  counter.classList.add("counter");

  const counterName = createElement("input");
  counter.appendChild(counterName);

  const counterDecrement = createElement("button", "-");
  counterDecrement.addEventListener("click", () => {
    counterValue.innerText = String(parseInt(counterValue.innerText, 10) - 1);
  });
  counter.appendChild(counterDecrement);

  const counterValue = createElement("span", "0");
  counter.appendChild(counterValue);

  const counterIncrement = createElement("button", "+");
  counterIncrement.addEventListener("click", () => {
    counterValue.innerText = String(parseInt(counterValue.innerText, 10) + 1);
  });
  counter.appendChild(counterIncrement);

  return counter;
}
