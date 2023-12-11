const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

// ==================== function ====================
const APIURL = "https://api.openweathermap.org/data/2.5/weather?q="
const APIKEY = "acb57cef52cebf8f410cfa304fd4c9d9"

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=acb57cef52cebf8f410cfa304fd4c9d9&units=metric
// https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getWeatherByLocation(location) {
    // method with destructured url
    const resp = await fetch(APIURL + location + `&appid=${APIKEY}&units=metric`)

    // method with copied whole url
    // const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=acb57cef52cebf8f410cfa304fd4c9d9")

    const respData = await resp.json()

    console.log(respData)

    addWeatherToPage(respData)
}

function addWeatherToPage(data) {
    // const temp = data.main.temp
    // const temp = kelvinToCelsius(data.main.temp)
    // const cityName = data.name
    /* <p>${cityName}</p> */
    // console.log(temp)

    const weather = document.createElement("div")
    weather.classList.add("weather")
    weather.innerHTML = `
    
    
    
    <h2>${data.main.temp.toFixed()}°C </h2>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
    <p>${data.weather[0].main}</p>

    

    `
    //clear main
    main.innerHTML = ""

    main.append(weather)

    // clear search box after appending main with weather info
    // search.value = ""
}

// function kelvinToCelsius(K) {
//     return (K - 273.15).toFixed()
// }

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const cityName = search.value
    // console.log(cityName)

    if (cityName) {
        getWeatherByLocation(cityName)
    }
})
getWeatherByLocation("Osijek")
