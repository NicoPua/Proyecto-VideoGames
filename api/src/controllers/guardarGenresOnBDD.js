const {Genre} = require("../db.js");

const saveGenresOnBDD = async (arrayData) =>{
    let arrayGenres = arrayData.map((genre) => genre.name)          //Filtro la información que necesito, que me llega en arrayData
    arrayGenres.forEach(async (genre) => {                          //Recorro la información limpia.
        if(genre.length > 0){
            await Genre.findOrCreate({where: {name: genre}})        //Creo los géneros en el Modelo Genre.
        }
    })
    //genresDB = Genre.findAll();                                     
}

module.exports = saveGenresOnBDD;