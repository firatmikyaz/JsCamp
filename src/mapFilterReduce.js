//E-ticaret sepetinde gerçekleşecek bir simülasyon
let cart = [
    {id:1,productName:"Telefon",quantity:3, unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2, unitPrice:30},
    {id:3,productName:"Kalem",quantity:1, unitPrice:20},
    {id:4,productName:"Şarj cihazı",quantity:2, unitPrice:100},
    {id:5,productName:"Kitap",quantity:3, unitPrice:30},
    {id:6,productName:"Pot",quantity:5, unitPrice:150}
]
//Dağıtık mimaride çalışma yapılır.Pc,mobil,tablet
//State Managment, SPA(Single Page Appc.) 


//********Map***********
//Bana sepeti göster-Sepete git.Iteration(tekrarlama) + yeni bir Array

//cart.map(product=>console.log(product.productName))//Sepeti dolaş,her bir product için adını yaz.


/*cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice*product.quantity)
})//Birden fazla satır old.yazılır*/


//*******Filter Fonksiyonu *******/(Filtreleme)(Yeni Elaman oluşturma)
let quantityOver2 = cart.filter(product=>product.quantity>2) //her bir product için quantitysi 2'den büyük olanları quantityOverTo değişkenine aktar.

console.log(quantityOver2)


//***Reduce *****/
let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)
//Ürünün birim fiyatını akümülatöre ekle
console.log(total)







// //Sepetteki datayı ekrana basalım
// //Referenas Tip
// function addToCart(sepet) {
//     sepet.push({id:7,productName:"Ruhsat",quantity:1, unitPrice:20})
// }
// addToCart(cart)
// console.log(cart)

// //Değer Tip
// let sayi = 10
// function sayiTopla(number) {
//     number += 1
// }
// sayiTopla(sayi)
// console.log(sayi)