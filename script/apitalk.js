import { promptHistory, renderPrompt } from "./render-prompt.js";

export async function sendGetPrompt(prompt) {
    if (!prompt) {
        promptHistory.push({ user: "Bot", message: "Skriv en fråga först!" });
        return;
    }

    try {
        const response = await fetch("http://192.168.0.45:3000/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        promptHistory.push(
            { user: "Bot", message: data.response } || {
                user: "Bot",
                message: "Fel, inget svar",
            }
        );

        renderPrompt(promptHistory);
    } catch (error) {
        promptHistory.push({ user: "Bot", message: "Fel! Får inte kontakt" });
        renderPrompt(promptHistory);
    }
}
