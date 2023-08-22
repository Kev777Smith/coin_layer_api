const API_KEY = "d3393690ccac79d3f33b47b010b8cd1d"

async function getCryptoData() {
    const url = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
    
    let result = await fetch(url);
    let data = await result.json();
    console.log(data)


    const bitcoinPrice = data.rates.BTC;
    const ethereumPrice = data.rates.ETH;
    const binancePrice = data.rates.BNB;
    const tetherPrice = data.rates.USDT;
    const ripplePrice = data.rates.XRP;
    const cardanoPrice = data.rates.ADA;
    

    document.getElementById('bitcoin-price').innerHTML = '$' + bitcoinPrice
    document.getElementById('ethereum-price').innerHTML = '$' + ethereumPrice
    document.getElementById('binance-price').innerHTML = '$' + binancePrice
    document.getElementById('tether-price').innerHTML = '$' + tetherPrice
    document.getElementById('ripple-price').innerHTML = '$' + ripplePrice
    document.getElementById('cardano-price').innerHTML = '$' + cardanoPrice
    

}

getCryptoData()