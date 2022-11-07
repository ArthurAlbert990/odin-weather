console.log('js working');

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

class City{
    constructor(city,data){
        this.name = city;
        this.weather = data.weather;
        this.temp = data.main.temp;
    }
}

// ********* DOING IT RIGHT NOW: *******
// writing functions to interface with api
//  Escrevendo a classe City, construir um objeto passando a cidade
//  e o resultado de getWeather, como utilizar:
//  let data = await getWeather('London')
//  let cidade = new City('London',data) //cidade será construído.

//  ***************** TASKS TO DO: ******************

// *** At beginning, only console log the info:

// write the functions to interface with the API.

// write the functions to process the json form the api and
// transform it into object with the necessary data.

// Add a search field for user to input the location.

// add html to display the info.

// style it.

// add a load component to display the time the user searched
// and when received the info from the api.