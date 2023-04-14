const createVideogame = require("../controllers/createVideogame")

const postNewVideogame = async (req,res) => {
    const {id,name,description,genres,platforms,image,released,rating} = req.body;
    try {
        const newVideogame = await createVideogame({id,name,description,genres,platforms,image,released,rating});
        res.status(200).json(newVideogame);    
    } catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

module.exports = postNewVideogame;