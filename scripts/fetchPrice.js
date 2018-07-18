const kurs = document.querySelector('.kurs-lsk');

fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LSK&tsyms=USD')
        .then(response => response.json())
        .then(data =>{
            kurs.innerHTML = `${data.LSK.USD}$`;
    })

