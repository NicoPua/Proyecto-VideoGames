const findVideogameByID = require("../controllers/findVideogameByID");

const getVideogameByID = async (req,res) => {
    const {id} = req.params;
    const idType = isNaN(id)? 'DB' : 'API' 
    try {
        const videogame = await findVideogameByID(id,idType);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}

module.exports = getVideogameByID;