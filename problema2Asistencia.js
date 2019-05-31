function joelFaltas (asistencias){
    let asistio = 0
    for(let index = 0; index<asistencias.length; index++){
        
        if(asistencias[index] === true){
            asistio++
        }
        
    }
    return asistio
}
const asistencias = [true, true, true, true, false, true, false, false, true, true]
const resultado = ( joelFaltas (asistencias) * 100) / asistencias.length

console.log('Joel tiene un ' + resultado + '% de asistencia.');