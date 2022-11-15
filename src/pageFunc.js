import * as api from './index.js'

console.log('pageFunc.js ok');

//globals
const cityName = document.querySelector('.name');
const temperature = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const tempMin = document.querySelector('.tempMin');
const tempMax = document.querySelector('.tempMax');
const searchField = document.querySelector('.searchField');
const searchBtn = document.querySelector('.searchBtn');
const popupText = document.querySelector('.pText');
const cardChildren = document.querySelectorAll('.card>*')
const weatherIcon = document.querySelector('.weatherIcon>img')

//event listeners
searchBtn.addEventListener('click',searchCity);


//functions
//
async function searchCity(e){
    toggleAnimation();
    console.log(e);
    let searchInput = searchField.value;
    console.log(`Search: ${searchInput}`);
    //let data = await api.getWeather(searchInput);
    let data = await api.fetchWeather(searchInput)
    if (data['data']['cod']==404){
        console.log('404, abort.');
        toggleAnimation();
    } else{
        console.log(data)
        let cidade =  new api.City(searchInput,data['data']);
        updatePage(cidade,data['fetchTime']);

        return cidade;
    }
    
}

function updatePage(cidade,fetchTime){
    console.log('updatePage');
    cityName.textContent = cidade.name;
    temperature.textContent = cidade.tempC+'°C';
    weather.textContent = cidade.weather[0].description;
    tempMin.textContent = cidade.tempMinC+'°C';
    tempMax.textContent = cidade.tempMaxC+'°C';
    popupText.textContent = fetchTime+'ms';

    let weatherDescription = cidade.weather[0].description;

    if (weatherDescription.includes('rain')) {
        console.log('weather icon> rain')
        weatherIcon.src = './icons/storm.png'
        weatherIcon.style.height = '5rem';
        weatherIcon.style.visibility = 'visible';

    } else if(weatherDescription.includes('clouds')) {
        console.log('weather icon> clouds');
        weatherIcon.src = './icons/storm.png'
        weatherIcon.style.height = '5rem';
        weatherIcon.style.visibility = 'visible';

    } else if(weatherDescription.includes('sun')) {
        console.log('weather icon> sun');
        weatherIcon.src = './icons/sun.png'
        weatherIcon.style.height = '5rem';
        weatherIcon.style.visibility = 'visible';
    }

    toggleAnimation()
}

function toggleAnimation(){
    console.log('toggle');
    for(let child of cardChildren){
        child.classList.toggle('skeleton')
    }
}