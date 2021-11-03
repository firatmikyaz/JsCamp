// console.log("Merhaba Kodlama.io")

// //js type safe değildir
// let dolarBugun = 9.30

// let dolarDun = 9.2
// dolarDun = "9.20"
// {
//    let dolarDun = 9.10 
// }

// console.log(dolarDun)

// const euroDun = 11.2
// //euroDun = 11 //hatalı sonuç

// console.log(euroDun)

// //array - dizi
// //camelCasing - örn:değişkenler
// //PascalCasing
// let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"] 

// console.log("<ul>")
// for(let i = 0;i<konutKredileri.length;i++){
//     console.log("<li>"+konutKredileri[i]+"</li>")
// }
// console.log("</ul>")


// console.log(konutKredileri)




/////////////////////Js giris ve fonksiyonlar,operatorler

let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}

//console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);


let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]

//console.log(students)

let students2 = [student,{id:2, name:"Halit"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest operatoru -> Geriye kalanlar
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")


//spread  -> ayrıştırma operatoru
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


//Destructuring -> elindeki arrayın değerlerini değişkenlere aktarma

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maxium]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maxium)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

//objelerin fonksiyonlara aktarılması
let {id,name} = category
console.log(id)
console.log(name)

