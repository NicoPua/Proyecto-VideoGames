
const cleanDataGame = async (arrGameByAPI) => {
    const cleanDataArr = arrGameByAPI.map((game) => {
        return {
            id: game.id,
            name: game.name,
            platforms: game.platforms.map((elem) => elem.platform.name),
            image: game.background_image,
            released: game.released,
            genres: game.genres.map((elem)=> elem.name),
            rating: game.rating,
            createinDb: false
         }
     });
    return cleanDataArr;
}

module.exports = cleanDataGame;