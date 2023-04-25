const {Genre} = require("../db.js");
const findGenres = require("../controllers/findGenres");
const cleanDataGenres = require("../auxFunctions/cleanDataGenres");
const saveGenresOnBDD = require("../controllers/guardarGenresOnBDD.js");

const getGenres = async (req,res) => {
    const genresDB = await Genre.findAll();      
    try {
        const response = await findGenres();
        if(genresDB.length === 0) await saveGenresOnBDD(response);  //Consulto si hay o no hay registros en la base de datos;
        const cleanGenres = cleanDataGenres(response);
        res.status(200).json(cleanGenres);
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}

module.exports = getGenres;