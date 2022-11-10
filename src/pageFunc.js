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
    let data = await getWeather(searchInput);
    let cidade=  new City(searchInput,data['data']);
    updatePage(cidade);
}

function updatePage(cidade){
    console.log('updatePage');
    cityName.textContent = cidade.name;
    temperature.textContent = cidade.tempC;
    weather.textContent = cidade.weather[0].description;
    tempMin.textContent = cidade.tempMin;
    tempMax.textContent = cidade.tempMax;
}