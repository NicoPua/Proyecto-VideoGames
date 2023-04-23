let validation = (gameData) => {
    let errors = {};

    if(!gameData.image.trim()){
        errors.image = "Se recomienda NO dejar vacío este campo."
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(gameData.image)){
        errors.image = "Debe mantener un formato URL.";
    }

    if(!gameData.name.trim()){
        errors.name = "Este campo NO debe estar vacío.";
    }else if(gameData.name.length < 2 && gameData.name.length < 30){
        errors.name = "El nombre debe tener entre 2 y 30 caracteres.";
    }else if(!/^[a-zA-Z0-9\s]+$/.test(gameData.name)){
        errors.name = "Debe contener letras y números."
    }

    if(!gameData.description.trim()){
        errors.description = "Se recomienda NO dejar vacío este campo.";
    }

    if(!gameData.released.length){
        errors.released = "Este campo NO debe estar vacío.";
    }
    
    if(!gameData.rating){
        errors.rating = "Este campo NO debe estar vacío.";
    }else if(gameData.rating > 10){
        errors.rating = "El rating no puede ser mayor de 10.";
    }else if(gameData.rating.length > 4){
        errors.rating = "El rating no debe tener más de dos decimales.";
    }

    return errors;
}

export default validation;
