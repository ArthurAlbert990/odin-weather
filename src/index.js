import * as dom from "./pageFunc";

console.log('js working!')


let apiKey ='5c968bd90755049f4ce18afee505fe6e'

export async function getWeather(cityName){
    try {
        
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        if (response.status==200){
            //console.log(response.json());
            console.log(response.status);
            return response.json();
        }

        else if(response.status == 404){
            alert('City not found, try again!')
        }
    
        throw await response.json()

    } catch (error) {
        console.log('Error:');
        return error;
    }
}

export async function fetchWeather(cityName){
    let startTime = performance.now()
    let data = await getWeather(cityName);
    let fetchTime = ((performance.now()-startTime).toFixed(0))

    console.log('fetchTime:',fetchTime)
    return {data, fetchTime};
}

export function kelvinToCelsius(temp){
    let tempCelsius = (temp-273.15).toFixed(0);
    return tempCelsius;
}

export class City{
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
// Style the page.


//  ***************** TASKS TO DO: ******************
// style it.
// add a loading that display between when the fetch is running:
// some type of loading animation.
