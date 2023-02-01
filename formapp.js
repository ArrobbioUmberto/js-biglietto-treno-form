


// 1. numero di chilometri che vuole percorrere 
// 2. età del passeggero 
// 3. calcolare il prezzo del biglietto 
//    tenendo in considerazione che: 
    // costa 0.21 euro al km 
    // se minorennes sconto del 20%
    // se over 65 sconto del 40 %
    // output del prwzzo finale va messo con max due decimali per indicare i centesimi del prezzo 




const firstNameElement = document.querySelector(' #firstname')
const lastNameElement = document.querySelector(' #lastname')
const numberKmElement = document.querySelector(' #km')
const ticketPrice = 0.21
const ageSelector = document.querySelector ('select[name="age"] ' )
const formBtnElement = document.querySelector('.formbutton input[type="button"')



formBtnElement.addEventListener('click', function(){
   console.log( firstNameElement.value)
    let firstName = firstNameElement.value 
    console.log( 'questo è il nome del passeggero', firstName)

    let lastName = lastNameElement.value 
    console.log('questo è il cognome del passeggero', lastName)

    let numberKm = numberKmElement.value
    console.log('questi sono i km che vuole percorrere', numberKm)

    let totalPrice = numberKm * ticketPrice

    let discountYoung = 0.8

    let discountOld = 0.6



})
// if (passengerAge < 18){
//     totalPrice = (numberKm * ticketPrice) * discountYoung
// } else if (passengerAge > 64){
//     totalPrice = (numberKm * ticketPrice) * discountOld
// }
// else {
//     totalPrice = numberKm * ticketPrice
// }
// let decimalTotalKm = parseFloat(totalPrice.toFixed(2))

// console.log('questo è il prezzo del biglietto', decimalTotalKm)

// SECONDA PARTE ESERCIZIO 
// cambiare le scelte in minorenne, sconto over65 e nessuno sconto 
// avere i dati tramite input e non prompt 




