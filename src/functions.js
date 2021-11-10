//////////Js Fonksiyonlar//////////
//Sepete ekleme simülasyonu
// function addToCart(productName) {
//     console.log("Sepet eklendi! " + productName)
// }

//addToCart() //undefined: tanımlanmamış ekranda yazar.Null ile karıştırma
//addToCart("Yumurta")
//addToCart("Karpuz")
//addToCart(15) //Js default olarak tip güvenliği yok.

// function addToCart(productName="Elma") {
//     console.log("Sepet eklendi! " + productName)
// }
// addToCart() //Deafult olarak Elma yazar

function addToCart(quantity, productName="Elma ") {
    console.log("Sepete eklendi : ürün : " + productName + "adet: " + quantity)
}
//addToCart("Yumurta ",10) //Ekrana Sepete eklendi! Yumurta adet: 10 yazar
addToCart(10) //ürün adı yerine adeti gelir.adet undefined yazar
//!!!! parametre defaultlar en sona yazılır

//////arrow function///////

//Bir fonksiyonu bir değişkene atayabilirsin
let sayHello = ()=>{
    console.log("Hello world!")
}
sayHello()

//Klasik fonksiyonuda değişkene atayabilirsin
let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

////////Objeler-nesneler//////
//Sepete ekle obje simülasyonu

function addToCart2(productName, quantity, unitPrice) {
    
}
//Buradaki sorun hangi sırayla ne yazacağım konusudur.Bu yüzden objeler oluştururuz.AYrı ayrı parametre geçmektense obje geçmek doğru olandır.
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

//Bana bir ürün tanımı yap ve onu gönder
//Obje tanımlaması
let product1 = {productName:"Elma",unitPrice:10, quantity:5} //Product olduğunu varsayıyoruz.Kapsülleme

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity) 
    console.log("Fiyat : " + product.unitPrice)     
}

addToCart3(product1) //product1 => product'a ataması yapılır.


//Arraylar,objeler referans tiptir.Değeri atanmaz.Referansı tutulur.Referans ataması yapılır.Veri aktarımı olmaz.
let product2 = {productName:"Elma",unitPrice:10, quantity:5}
let product3 = {productName:"Elma",unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
//console.log(product3.productName)


//Sayısal veriler değer ataması yapılır.Referans ataması olmaz.
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
//console.log(sayi1)


//Birden fazla ürünü sepete ekleme simülasyonu, ürünler
function addToCart4(products) {
    console.log(products)
}

//Arrayla bu işlemi yapalım.
let products = [
    {productName:"Elma",unitPrice:10, quantity:5},
    {productName:"Armut",unitPrice:10, quantity:5},
    {productName:"Karpuz",unitPrice:10, quantity:5}
]

//addToCart4(products)



/////RestOperatörü - toparlar

function add(number1, number2) {
    console.log(number1 + number2)
}
add(20,30)

//Sayı adeti 3,4,5 sonsuza gidince bu yöntem yanlış
// function add(...numbers) {
//     console.log(numbers)
// }
//Hepsi Array notasyonu olarak döner
// add(20,30)
// add(20,30,40)
// add(20,30,40,50)  



function add(bisey,...numbers) {//rest operatörü,her zaman fonksiyonun sonuna yaz
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(bisey)
    console.log(total)
}
add(20,30)
//add(20,30,40)
//add(20,30,40,50)  



////////////Spread operatörü - ayrıştırır//////
//console.log(Math.max(30,10,500,600,120)) //Sonuç 600-Array içine atar değerleri

let numbers = [30,10,500,600,120]
//console.log(Math.max(...numbers))



//////Destructing operatörü////////////

let [icAnadolu,marmara,karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
//console.log(regions[1]) //Marmara
//console.log(icAnadolu) //atama
//console.log(marmara) //atama

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)



let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma",unitPrice:10, quantity:5})

console.log(newProductName)