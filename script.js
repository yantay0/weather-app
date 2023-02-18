let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


// Function to get weather details from api and display them
let getWeather = () => {
    let cityValue = cityRef.value;
    //If input field is empty
    if(cityValue.length == 0) {
        result.innerHTML = `<h3>Please enter a city</h3>`;
    }
    // else {
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;
    //     fetch(url)
    //     .then((resp) => resp.json())
    //     // if city name is valid
    //     .then((data) => {})
    //     .catch(() => {
    //         result.innerHTML
    //     }

    // }
};
window.addEventListener("load", getWeather());