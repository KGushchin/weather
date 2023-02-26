fetch('https://api.openweathermap.org/data/2.5/weather?id=617239&appid=d847c38e8f16bd0ec95642f8e1919809')
.then(function(resp) {return resp.json()})
.then(function(tiraspol) {
    
    document.querySelector('.tiraspol_name').textContent = tiraspol.name;
    document.querySelector('.tiraspol_weather').innerHTML = Math.round(tiraspol.main.temp - 273)+'&deg;'
    document.querySelector('.tiraspol__desc').textContent = tiraspol.weather[0] ['description'];
    document.querySelector('.tiraspol_img').innerHTML = `<img src="http://openweathermap.org/img/wn/${tiraspol.weather[0] ['icon']}@2x.png">`;
})



fetch('https://api.openweathermap.org/data/2.5/weather?id=524894&appid=d847c38e8f16bd0ec95642f8e1919809')
.then(function(resp) {return resp.json()})
.then(function(moscow) {
    
    document.querySelector('.moscow_name').textContent = moscow.name;
    document.querySelector('.moscow_weather').innerHTML = Math.round(moscow.main.temp - 273)+'&deg;'
    document.querySelector('.moscow__desc').textContent = moscow.weather[0] ['description'];
    document.querySelector('.moscow_img').innerHTML = `<img src="http://openweathermap.org/img/wn/${moscow.weather[0] ['icon']}@2x.png">`;
})

fetch('https://api.openweathermap.org/data/2.5/weather?id=625140&appid=d847c38e8f16bd0ec95642f8e1919809')
.then(function(resp) {return resp.json()})
.then(function(minsk) {
    
    
    document.querySelector('.minsk_weather').innerHTML = Math.round(minsk.main.temp - 273)+'&deg;'
    document.querySelector('.minsk__desc').textContent = minsk.weather[0] ['description'];
    document.querySelector('.minsk_img').innerHTML = `<img src="http://openweathermap.org/img/wn/${minsk.weather[0] ['icon']}@2x.png">`;
})

fetch('https://api.openweathermap.org/data/2.5/weather?id=491687&appid=d847c38e8f16bd0ec95642f8e1919809')
.then(function(resp) {return resp.json()})
.then(function(smolensk) {
    
    document.querySelector('.smolensk_name').textContent = smolensk.name;
    document.querySelector('.smolensk_weather').innerHTML = Math.round(smolensk.main.temp - 273)+'&deg;'
    document.querySelector('.smolensk__desc').textContent = smolensk.weather[0] ['description'];
    document.querySelector('.smolensk_img').innerHTML = `<img src="http://openweathermap.org/img/wn/${smolensk.weather[0] ['icon']}@2x.png">`;
})

fetch('https://api.openweathermap.org/data/2.5/weather?id=569223&appid=d847c38e8f16bd0ec95642f8e1919809')
.then(function(resp) {return resp.json()})
.then(function(che) {
    
    document.querySelector('.che_name').textContent = che.name;
    document.querySelector('.che_weather').innerHTML = Math.round(che.main.temp - 273)+'&deg;'
    document.querySelector('.che__desc').textContent = che.weather[0] ['description'];
    document.querySelector('.che_img').innerHTML = `<img src="http://openweathermap.org/img/wn/${che.weather[0] ['icon']}@2x.png">`;
})