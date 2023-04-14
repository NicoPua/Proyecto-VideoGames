const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");

const getVideogames = require("../handlers/getVideogames");
const getVideogameByID = require("../handlers/getVideogameByID");
const postNewVideogame = require("../handlers/postNewVideogame");
const getGenres = require("../handlers/getGenres");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.get("/videogames/:id", getVideogameByID);    //LISTO

router.get("/videogames", getVideogames);           //LISTO

router.post("/videogames", postNewVideogame);       //LISTO

router.get("/genres", getGenres);                   //LISTO

module.exports = router;
