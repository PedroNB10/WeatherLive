const windVelocity = document.getElementById("wind");
const realTemperature = document.getElementById("real-temperature");
const humidity = document.getElementById("humidity");
const cityName = document.getElementById("city");
const weatherDescription = document.getElementById('weather-description')
const thermalSensation = document.getElementById('thermal-sensation')
const imgStats = document.getElementById("img-stats");

function displayInfo(data) {
   console.log(data.cod)
   console.log(typeof(data))
   console.log(typeof((data.cod)))
  
//   console.log(data.name); //city
//   console.log(data.weather[0].description); //description of weather
//   console.log(Math.round(data.main.temp - 273.15)); //temperature in kelvin
//   console.log(data.main.humidity); //humity
//   console.log(data.wind.speed); //wind velocity
if(data.cod == 200){
   cityName.innerHTML = data.name
   realTemperature.innerHTML = Math.round(data.main.temp - 273.15)+'°C'
   thermalSensation.innerHTML = Math.round(data.main.feels_like - 273.15)+'°C'
   windVelocity.innerHTML = data.wind.speed+'m/s'
   humidity.innerHTML = data.main.humidity+'%'
   weatherDescription.innerHTML = data.weather[0].description
    let imgName = data.weather[0].icon
    imgStats.src = `http://openweathermap.org/img/wn/${imgName}@2x.png`
}

else{
   alert('Erro')
}


  
}

async function ListCity(cityname) {
  const apiKey = "cce812866d75fa24c614943a81bc7513";
  const cityName = cityname;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br`;
  let data = await fetch(weatherUrl).then((response) => response.json());
  displayInfo(data);
}

function FindCity() {
  const input = document.getElementById("input");
  ListCity(input.value);
}
