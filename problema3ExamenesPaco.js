function pacoExamenes(examenes){
    let examenesPorHacer = 0
    for(let index = 0; index<examenes.length; index++){
        if(examenes[index]<7){
           examenesPorHacer++
        }
    }
    return examenesPorHacer
}
const examenes = [8, 10, 5, 7, 5, 10, 6]
const resultado = pacoExamenes(examenes)

console.log('Paco tendra que hacer un total de ' + resultado + ' examenes');