const kurs = document.querySelector('.kurs-lsk');

fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LSK&tsyms=USD')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            console.log(data.BTC.USD);
            console.log(data.LSK.USD);
            kurs.innerHTML = `${data.LSK.USD}$`;
        })

console.log(allArticles)

String.prototype.newFunction = function(){
    console.log("DZIAŁA")
}