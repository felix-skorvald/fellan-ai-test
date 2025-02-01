import { sendGetPrompt } from "./apitalk.js";

const promptInput = document.querySelector("#prompt-input");
const promptButton = document.querySelector("#prompt-button");
const promptOutput = document.querySelector("#prompt-output");

let promptHistory = [];

function renderPrompt(promptHistory) {
    promptOutput.innerHTML = "";
    promptInput.value = "";
    promptHistory.forEach((prompt) => {
        const promptElement = document.createElement("p");
        promptElement.classList.add("prompt");
        promptElement.innerText = `${prompt.user}: ${prompt.message}`;
        promptOutput.appendChild(promptElement);
    });
}

promptButton.addEventListener("click", () => {
    sendGetPrompt(promptInput.value);
    if (promptInput.value) {
        promptHistory.push({ user: "du", message: promptInput.value });
        console.log(promptHistory);
    }

    renderPrompt(promptHistory);
});

export { promptHistory, renderPrompt };
