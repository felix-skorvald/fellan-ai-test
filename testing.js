import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function test() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Det funkade första gången, detta är andra. Tjoohoo!";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

test();
