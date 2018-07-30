selector = document.getElementById('city-type')
cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX']

cities.forEach(function(cityName){
  var city = document.createElement('option')
  city.textContent = cityName
  selector.appendChild(city)
})

document.getElementById('city-type').addEventListener('change', function(event){

  if (event.target.value === 'NYC') {
    document.querySelector('body').className = 'nyc'
  }
  else if (event.target.value === 'SF'){
    document.querySelector('body').className = 'sf'
  }
  else if (event.target.value === 'LA'){
    document.querySelector('body').className = 'la'
  }
  else if (event.target.value === 'SYD'){
    document.querySelector('body').className = 'sydney'
  }
  else if (event.target.value === 'ATX'){
    document.querySelector('body').className = 'austin'
  }
  else
    document.querySelector('body').className = ''
})
