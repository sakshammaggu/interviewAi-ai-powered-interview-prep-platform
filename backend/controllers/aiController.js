const OpenAI = require("openai");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// @desc    Generate interview questions and answers using OpenAI
// @route   POST /api/ai/generate-questions
// @access  Private
const generateInterviewQuestions = async (req, res) => {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({ message: "OpenAI API Key is missing in server configuration" });
        }

        const { role, experience, topicsToFocus, numberOfQuestions } = req.body;
        if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const prompt = questionAnswerPrompt(role, experience, topicsToFocus, numberOfQuestions);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });

        const rawText = completion.choices[0].message.content;
        console.log("Raw AI Response:", rawText);

        // Extract JSON array: Find first '[' and last ']'
        const jsonMatch = rawText.match(/\[[\s\S]*\]/);

        if (!jsonMatch) {
            throw new Error("No JSON array found in response");
        }

        const cleanedText = jsonMatch[0];

        const data = JSON.parse(cleanedText);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error generating interview questions:", error);
        res.status(500).json({ message: "Failed to generate interview questions", error: error.message });
    }
};

// @desc    Generate concept explanation using OpenAI
// @route   POST /api/ai/generate-explanation
// @access  Private
const generateConceptExplanation = async (req, res) => {
    try {
        const { question } = req.body;
        if (!question) {
            return res.status(400).json({ message: "Missing required field: question" });
        }

        const prompt = conceptExplainPrompt(question);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });

        const rawText = completion.choices[0].message.content;

        // Extract JSON object: Find first '{' and last '}'
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);

        if (!jsonMatch) {
            throw new Error("No JSON object found in response");
        }

        const cleanedText = jsonMatch[0];

        const data = JSON.parse(cleanedText);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Failed to generate concept explanation", error: error.message });
    }
};

module.exports = {
    generateInterviewQuestions,
    generateConceptExplanation,
};