const verifyDataGame = require("../auxFunctions/verifyDataGame");
const createVideogame = require("../controllers/createVideogame")

const postNewVideogame = async (req,res) => {
    const {id,name,description,genres,platforms,image,released,rating} = req.body;
    try {       
        const verifyData = verifyDataGame({id,name,description,genres,platforms,image,released,rating});
        const newVideogame = await createVideogame(verifyData);
        res.status(200).json(newVideogame);    
    } catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

module.exports = postNewVideogame;