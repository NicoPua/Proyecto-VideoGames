const cleanDataGenres = (arrDataGenres) => {
    const arrGenres = [];
    arrDataGenres.map((genre)=> arrGenres.push(genre.name));
    return arrGenres;
}

module.exports = cleanDataGenres;