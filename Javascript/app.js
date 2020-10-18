var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var price = document.querySelector('.price');


button.addEventListener('click', function(){
    fetch('https://finnhub.io/api/v1/quote?symbol=' + inputValue.value + '&token=bu69t0f48v6tafi4jcgg')
    .then(response => response.json())
    .then(data => {
        var priceVal = data['c'];


        price.innerHTML = priceVal;


    })

    
    .catch(err => alert('Wrong city name'))

})