const promptOutput = document.querySelector("#prompt-output");

export async function sendGetPrompt(prompt) {
    const errorRuta = document.createElement("p");

    if (!prompt) {
        errorRuta.innerText = "Bot:" + "Skriv en fråga först!11";
        promptOutput.appendChild(errorRuta);
        return;
    }

    try {
        const response = await fetch("http://192.168.0.45:3000/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        const aiResponse = document.createElement("p");
        aiResponse.innerText = "Bot:" + data.response || "Inget svar";
        promptOutput.appendChild(aiResponse);
    } catch (error) {
        errorRuta.innerText = "Bot:" + "Fel vid hämtning av svar.";
        promptOutput.appendChild(errorRuta);
    }
}
