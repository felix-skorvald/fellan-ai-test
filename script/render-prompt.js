import { sendGetPrompt } from "./apitalk.js";

const promptInput = document.querySelector("#prompt-input");
const promptButton = document.querySelector("#prompt-button");

promptButton.addEventListener("click", () => sendGetPrompt(promptInput.value));
