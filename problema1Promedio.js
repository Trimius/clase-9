function calificacionesDaniel (calificaciones){
    let sumaCalificaciones = 0

    for(let index = 0; index<calificaciones.length; index++){
        sumaCalificaciones += calificaciones[index]
    }
    return sumaCalificaciones
}
const calificaciones = [10, 5, 7, 8]
const promedio = calificacionesDaniel (calificaciones) / calificaciones.length

if(promedio>=8){
    console.log('Paso con buen promedio');
}
else{
    console.log('No alcanzo buen promedio')
}
