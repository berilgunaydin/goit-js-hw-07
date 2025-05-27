const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const functionInput = () => {
    outputEl.textContent = inputEl.value.trim() || `Anonymous`;
}

inputEl.addEventListener("input",functionInput)