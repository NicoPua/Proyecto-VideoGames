let validation = (gameData) => {
    let errors = {
        flag: false
    };

    if(!gameData.image.trim())  errors.image = "Se recomienda NO dejar vacío este campo."
    else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(gameData.image))  errors.image = "Debe mantener un formato URL.";

    if(!gameData.name.trim()){
        errors.name = "Este campo NO debe estar vacío.";
        errors.flag = true;
    }else if(gameData.name.length < 2 && gameData.name.length < 30){
        errors.name = "El nombre debe tener entre 2 y 30 caracteres.";
        errors.flag = true;
    }else if(!/^[a-zA-Z0-9\s]+$/.test(gameData.name)){
        errors.name = "Debe contener letras y números."
        errors.flag = true;
    }


    if(!gameData.description.trim()){
        errors.description = "Se recomienda NO dejar vacío este campo.";
        errors.flag = true;
    }
    if(!gameData.released.length){
        errors.released = "Este campo NO debe estar vacío.";
        errors.flag = true;
    }
    

    if(gameData.rating > 10){
        errors.rating = "El rating no puede ser mayor de 10.";
        errors.flag = true;
    }else if(gameData.rating < 0){
        errors.rating = "El rating no puede ser menor de 0.";
        errors.flag = true;
    }else if(gameData.rating.length > 4){
        errors.rating = "El rating no debe tener más de dos decimales.";
        errors.flag = true;
    }
    

    if(gameData.genres.length === 0){
        errors.genres = "Debe estar seleccionado al menos UN genre.";
        errors.flag = true;
    }
    if(gameData.platforms.length === 0){
        errors.platforms = "Debe estar seleccionado al menos UNA platform.";
        errors.flag = true;
    }

    return errors;
}

export default validation;
