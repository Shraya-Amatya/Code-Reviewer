const aiService = require('../services/ai.service')
module.exports.getResponse = async (req,res)=>{
    const code = req.query.code;

    if(!code){
        return res.status(400).send("Prompt should be provided")
    }
    const response = await aiService(code);
    res.send(response);
}