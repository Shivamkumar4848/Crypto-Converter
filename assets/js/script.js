
let currency = document.getElementById('currency');
let show = document.getElementById('show');
let crypto = document.getElementById('crypto');
let btn = document.getElementsByClassName('btn')

const selectCoins = () => {
    fetch('https://api.coingecko.com/api/v3/coins/list')
    .then(res => res.json())
    .then(data => {
        let tempCoins =''
        data.forEach((_, index) => {
            tempCoins += `<option value="${data[index].id}">${data[index].name}</option>`
        })
    crypto.innerHTML = tempCoins
    })

    fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
    .then(res => res.json())
    .then(data => {
        let tempCurrency =''
        data.forEach((_, index) => {
            tempCurrency += `<option value="${data[index]}">${data[index]}</option>`
        })
        currency.innerHTML = tempCurrency
    })
}

selectCoins()
const showData = () => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto.value}&vs_currencies=${currency.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data[crypto.value][currency.value])
        show.innerText = `${currency.value}`+' '+ data[crypto.value][currency.value]
    })
    .catch(error => console.log(error))
}




