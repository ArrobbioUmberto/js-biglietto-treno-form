


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

    let firstName = firstNameElement.value 
    console.log( 'questo è il nome del passeggero', firstName)

    let lastName = lastNameElement.value 
    console.log('questo è il cognome del passeggero', lastName)

    let numberKm = numberKmElement.value
    console.log('questi sono i km che vuole percorrere', numberKm)

    let userAge = ageSelector.value
    console.log( userAge)

    let totalPrice = numberKm * ticketPrice
    // console.log( totalPrice)

    let discountYoung = 0.8

    let discountOld = 0.6

    // console.log(discountOld, discountYoung)
   
   switch(userAge){
    case 'Minorenne':
        totalPrice = (numberKm * ticketPrice) * discountYoung
        break
    case 'Nessuno':
        totalPrice = totalPrice
        break
    case 'Over65':
        totalPrice = (numberKm * ticketPrice) * discountOld
        break
   }

//    console.log(parseFloat(totalPrice.toFixed(2)))

   const HTMLPrice = document.getElementById('realprice')

   HTMLPrice.innerHTML = totalPrice.toFixed(2) + '$'

   const HTMLUserName = document.getElementById('user--name')
   const HTMLUserSurname = document.getElementById('user--surname')

   HTMLUserName.innerHTML = firstName 
   HTMLUserSurname.innerHTML = lastName

   const HTMLDiscount = document.getElementById('ticket')

   switch(userAge){
    case 'Minorenne':
        HTMLDiscount.innerHTML = '20%'
        break
    case 'Nessuno':
        HTMLDiscount.innerHTML = 'Nessuna'
        break
    case 'Over65':
        HTMLDiscount.innerHTML = '40%'
        break
   }

   const carrozzaNumberHTML = document.getElementById('carrozza--number')
   const carrozzaKeyHTML = document.getElementById('carrozza--key')

   let numeriRandom = Math.floor(Math.random()*10)


   carrozzaNumberHTML.innerHTML = numeriRandom
   let codiceRandom = Math.floor(Math.random()*10000)
   carrozzaKeyHTML.innerHTML = codiceRandom

   
   

})
