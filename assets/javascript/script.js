/* VARIABLES */
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

//API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//IMG_URL = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"

/* FUNCTION USING ASYNC AND AWAIT */
const getWeather = async(city) => {
    weather.innerHTML = `<h3> Loading.. </h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

/* HTML EDITING USING IF AND ELSE */
const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h3> City Not Found </h3>`
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h4>${data.main.temp} ℃</h4>
        <h5>${data.weather[0].main}</h5>
    </div>
`
}

/* ENABLE FUNCTION WHEN USING INPUT SUBMIT */
form.addEventListener('submit', 
function(event){
    getWeather(search.value)
    event.preventDefault();
})