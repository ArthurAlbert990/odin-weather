console.log('js working');

let apiKey ='you_api_key'

async function getWeather(cityName){
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        if (response.status==200){
            //console.log(response.json());
            return response;
        }
    
        throw new Error(response)

    } catch (error) {
        console.log('ERROR ERROR ERROR');
    }

}





// ********* DOING IT RIGHT NOW: *******
// handle fetch error, handle it on getWeather
//  do another function to convert getWeather json to object?
// how to correctly handle the fetch error?
//  see the browser message.
//  good article about handling fetch errors:
//  https://dmitripavlutin.com/javascript-fetch-async-await/#3-handling-fetch-errors


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