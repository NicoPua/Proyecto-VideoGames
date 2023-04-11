const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const findAllVideoGames = require("../controllers/findAllVideoGames");
const getVideogameByID = require("../controllers/getVideogameByID");
//const getGameByName = require("../controllers/getGameByName");
const createVideogame = require("../controllers/createVideogame");
//const getGenres = require("../controllers/getGenres");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.get("/videogames/:id", async (req,res) => {
    const {id} = req.params;
    try {
        const videogame = await getVideogameByID(id);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
});

router.get("/videogames", async (req,res) => {
    try {
        const videogames = await findAllVideoGames();
        res.status(200).json(videogames);
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
});


//router.get("/videogames/name?={name}", getGameByName);

router.post("/videogames", async (req,res) => {
    try {
        const {id,name,description,platforms,image,released,rating} = req.body;
        const newVideogame = await createVideogame({id,name,description,platforms,image,released,rating});
        res.status(200).json(newVideogame);    
    } catch (error) {
        res.status(400).json({ "error": error.message })
    }

});

//router.get("/genres", getGenres);

module.exports = router;
