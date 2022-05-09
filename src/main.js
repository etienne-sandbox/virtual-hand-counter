import { createCounter } from "./counter";
import "./style.css";
import { createElement } from "./utils";

const app = document.querySelector("#app");

const title = createElement("h1", "Virtual Hand Counter");
app.appendChild(title);

app.appendChild(createCounter());
app.appendChild(createCounter());
app.appendChild(createCounter());

const button = createElement("button", "Add counter");
button.addEventListener("click", () => {
  app.insertBefore(createCounter(), button);
});
app.appendChild(button);
