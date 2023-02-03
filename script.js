

const windVelocity = document.getElementById('wind')
const realTemperature = document.getElementById('real-temperature')
const humidity = document.getElementById('humidity')
const cityName = document.getElementById('city')
const imgStats = document.getElementById('img-stats')

function FindCity(){
const input = document.getElementById('input')
console.log(input.value)


let data = ListCity(input.value)

console.log('Deu certo')
console.log(data)

}


async function ListCity(cityname){
const apiKey = "cce812866d75fa24c614943a81bc7513";
const cityName = cityname;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br`;


   let data  = await fetch(weatherUrl)
   .then(response => response.json())


   console.log(data);
   console.log(data.name); //city
   console.log(data.weather[0].description); //description of weather
   console.log(Math.round(data.main.temp-273.15)); //temperature in kelvin

   console.log(data.main.humidity);//humity
   console.log(data.wind.speed);//wind velocity]


  


}
