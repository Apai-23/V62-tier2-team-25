import { GoogleGenAI } from "@google/genai";

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { prompt } = await req.json();

    if (typeof prompt !== "string" || !prompt.trim() || prompt.length > 30000) {
      return Response.json({ error: "Invalid prompt." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is not configured.");

      return Response.json(
        { error: "The AI service is not configured." },
        { status: 500 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    const answer = result.text;

    if (!answer) {
      throw new Error("Gemini returned an empty response.");
    }

    return Response.json({ response: result.text });
  } catch (error) {
    console.error("Gemini function error:", error);

    return Response.json(
      { error: "Unable to generate your learning path." },
      { status: 500 },
    );
  }
};
