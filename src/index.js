import * as dom from "./pageFunc";

console.log('js working!')


let apiKey ='5c968bd90755049f4ce18afee505fe6e'

async function getWeather(cityName){
    try {
        
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        if (response.status==200){
            //console.log(response.json());
            console.log(response.status);
            return response.json();
        }
    
        throw await response.json()

    } catch (error) {
        console.log('Error:');
        return error;
    }
}

async function fetchWeather(cityName){
    let startTime = performance.now()
    let data = await getWeather(cityName);
    let fetchTime = performance.now()-startTime

    console.log('fetchTime:',fetchTime.toFixed(2))
    return {data, fetchTime};
}

function kelvinToCelsius(temp){
    let tempCelsius = temp-273.15;
    return tempCelsius;
}

class City{
    constructor(city, data){
        this.name = city;
        this.weather = data.weather;
        this.tempC = kelvinToCelsius(data.main.temp);
        this.tempMaxC = kelvinToCelsius(data.main.temp_max);
        this.tempMinC = kelvinToCelsius(data.main.temp_min);
    }
}


//  Como utilizar classe City:
//  e o resultado de getWeather, como utilizar:
//  let data = await fetchWeather('London')
//  let cidade = new City('London',data['data']) //cidade será construído.


// ********* DOING IT RIGHT NOW: ********
// Refactoring PageFunc.js, updatePage() function.
//  Needs to display fetch time too.


//  ***************** TASKS TO DO: ******************
// *** At beginning, only console log the info:

// write the functions to interface with the API.[ok]

// Add a search field for user to input the location.[ok]

// add html to display the info.

// style it.

// [OK]add a load component to display the time the user searched
// and when received the info from the api. 