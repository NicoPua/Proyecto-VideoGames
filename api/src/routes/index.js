const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");

const getVideogames = require("../handlers/getVideogames");
const getVideogameByID = require("../handlers/getVideogameByID");
const postNewVideogame = require("../handlers/postNewVideogame");
const getGenres = require("../handlers/getGenres");
const getPlatforms = require('../handlers/getPlatforms');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.get("/videogames/:id", getVideogameByID);    //LISTO a

router.get("/videogames", getVideogames);           //LISTO a

router.post("/videogames", postNewVideogame);       //LISTO a

router.get("/genres", getGenres);                   //LISTO a

router.get("/platforms", getPlatforms)              //LISTO 

module.exports = router;
