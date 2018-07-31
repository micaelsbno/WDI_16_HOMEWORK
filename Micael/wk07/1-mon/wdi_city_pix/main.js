selector = document.getElementById('city-type')
var cities = {
  NYC: 'nyc', 
  SF: 'sf',
  LA: 'la',
  SYD: 'sydney',
  ATX: 'austin'
}

Object.keys(cities).forEach(function(cityName){
  var city = document.createElement('option')
  city.textContent = cityName
  selector.appendChild(city)
})

body = document.querySelector('body');

document.getElementById('city-type').addEventListener('change', function(event){
  var city = cities[event.target.value]
  if (city != undefined) {
    body.className = city;
  } else {
    body.className = '';
  }
})
