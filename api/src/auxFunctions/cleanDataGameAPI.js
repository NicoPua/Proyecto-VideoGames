
const cleanDataGameAPI = ({id,name,released,background_image,platforms,rating,genres,description}) => {
    const newArr = { 
        id,
        name,
        released,
        image: background_image,
        platforms: platforms.map((plat)=> plat.platform.name ),
        rating,
        genres: genres.map((genre)=> genre.name),
        description,
        createinDb: false
        
    }
    return newArr;
}

module.exports = cleanDataGameAPI;