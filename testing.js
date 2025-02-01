import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function toGemini() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
        //importera från frontend";

    const result = await model.generateContent(prompt);
    //exportera svar till frontend
    console.log(result.response.text());
}

toGemini();
