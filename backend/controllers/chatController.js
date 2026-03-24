import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const chatWithAI = async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    res.json({
      success: true,
      message: text
    });

  } catch (error) {

    console.error("AI Error:", error);

    res.json({
      success: false,
      message: "AI Assistant is currently unavailable"
    });

  }
}

export { chatWithAI };