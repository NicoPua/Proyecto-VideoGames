const findAllVideoGames = require("../controllers/findAllVideoGames");
const findGameByName = require("../controllers/findGameByName");

const getVideogames = async (req,res) => {
    const {name} = req.query;
    try {
        const response = name? await findGameByName(name) : await findAllVideoGames();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
}

module.exports = getVideogames;