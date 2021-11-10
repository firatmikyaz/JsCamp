console.log("***********Asal Sayi Bulma************")
function findPrimeNumbers(...numbers) {
    numbers.forEach((number) => {
        let status = true;
        for (let i = 2; i < number; i++) {
            if(number % i == 0){
                status = false;
            }
        }

        //Ternary operatörü
        status ? console.log("asal sayı:" + number) : console.log("asal değil:", number);
    });
}

findPrimeNumbers(4,5,7,15,23,9)

console.log("***********Arkadas Sayi Bulma************")

function arkadasSayilar(sayiBir,sayiIki) {
    let sayiBirBolenler = [];
    let toplamBir = 0;
    let toplamIki = 0;

    for (let i = 0; i < sayiBir; i++) {
        if (sayiBir % i == 0 ){
            sayiBirBolenler.push(i);
        }
    }

    let sayiIkiBolenler = [];
    for (let i = 0; i < sayiIki; i++) {
        if (sayiIki % i == 0 ){
            sayiIkiBolenler.push(i);
        }
    }

    sayiBirBolenler.forEach((sayi) => {
        toplamBir += sayi;
    });
    
    sayiIkiBolenler.forEach((sayi) => {
        toplamIki += sayi;
    });

    if (toplamBir == sayiIki && toplamIki == sayiBir){
        console.log("Bu iki sayı arkadaş sayıdır:" + sayiBir + "-" + sayiIki);
    }
    else {
        console.log("Bu iki sayı arkadaş sayı değildir:" + sayiBir + "-" + sayiIki)
    }
}

arkadasSayilar(220,284)

console.log("***********1000'e Mükemmel Sayiları Bulma************")

function mukemmelSayi() {
    let mukemmelSayilar = [];
    
    for (let i = 6; i <= 1000; i++) {
        let toplam = 0;
        
        for (let j = 1; j <= i; j++) {
            if(i % j == 0){
                toplam += j;
            }
        }

        if (toplam == i*2){
            mukemmelSayilar.push(i);
        }
    }

    console.log(mukemmelSayilar)
}

mukemmelSayi()


console.log("***********1000'e kadar asal Sayiları Bulma************")

function asalSayiBulma() {
    let asalSayilar = [];
    for (let i = 2; i <= 1000; i++) {
        let durum = true;
        
        for (let j = 2; j < i; j++) {
            if(i % j == 0)
            durum = false;
        }

        durum ? console.log(i) : " ";
    }
    console.log(asalSayilar);
}

//asalSayiBulma()
