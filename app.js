


// 1. numero di chilometri che vuole percorrere 
// 2. età del passeggero 
// 3. calcolare il prezzo del biglietto 
//    tenendo in considerazione che: 
    // costa 0.21 euro al km 
    // se minorennes sconto del 20%
    // se over 65 sconto del 40 %
    // output del prwzzo finale va messo con max due decimali per indicare i centesimi del prezzo 


let numberKm = parseFloat( prompt('Quanti chilometri devi percorrere?'))
console.log('questi sono i km che vuole percorrere', numberKm)
let passengerAge = parseInt (prompt('Quanti anni hai ?'))
console.log('questa è l\'età del nostro passeggero', passengerAge)
let firstName = prompt('Come ti chiami ?')
console.log( 'questo è il nome del passeggero', firstName)
const ticketPrice = 0.21
let lastName = prompt('Dimmi il tuo cognome')
console.log('questo è il cognome del passeggero', lastName)

let totalPrice = numberKm * ticketPrice

let discountYoung = 0.8

let discountOld = 0.6
if (passengerAge < 18){
    totalPrice = (numberKm * ticketPrice) * discountYoung
} else if (passengerAge > 64){
    totalPrice = (numberKm * ticketPrice) * discountOld
}
else {
    totalPrice = numberKm * ticketPrice
}
let decimalTotalKm = parseFloat(totalPrice.toFixed(2))

console.log('questo è il prezzo del biglietto', decimalTotalKm)




