const aiService = require("../services/ai.service")

module.exports.getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if(!prompt) {
        return res.status(400).send("Prompt is required");
    }
    
    try {
        const response = await aiService(prompt);
        res.send(response);
    } catch (error) {
        console.error("Controller Error:", error);
        res.status(500).send("Internal server error");
    }
}