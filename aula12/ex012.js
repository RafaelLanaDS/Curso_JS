var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatemente ${hora}H`)
if (hora < 12){
    console.log('Bom dia Chefe')
} else if (hora <= 13) {
    console.log('Boa tarde Chefe')
} else{
    console.log('Boa noite chefe')
}