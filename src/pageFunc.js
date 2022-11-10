import * as api from './index.js'

console.log('pageFunc.js ok');

//globals
const cityName = document.querySelector('.name');
const temperature = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const tempMin = document.querySelector('.tempMin');
const tempMax = document.querySelector('.tempMax');
const searchField = document.querySelector('.searchField');
const searchBtn = document.querySelector('.searchBtn')

//event listeners
searchBtn.addEventListener('click',searchCity);


//functions
//
async function searchCity(e){
    console.log(e);
    let searchInput = searchField.value;
    console.log(`Search: ${searchInput}`);
    //let data = await api.getWeather(searchInput);
    let data = await api.fetchWeather(searchInput)
    console.log(data)
    let cidade =  new api.City(searchInput,data['data']);
    updatePage(cidade);

    return cidade;
}

function updatePage(cidade){
    console.log('updatePage');
    cityName.textContent = cidade.name;
    temperature.textContent = cidade.tempC+'°C';
    weather.textContent = cidade.weather[0].description;
    tempMin.textContent = cidade.tempMinC;
    tempMax.textContent = cidade.tempMaxC;
}