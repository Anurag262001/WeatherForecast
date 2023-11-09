const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}
/* 1st part  */
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();  
    }).then(showWeatherReport);
}
// Show Weather Report on console
function showWeatherReport(weather){
    console.log(weather);

    
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/06/08/15/01/wolfssee-2383842_960_720.jpg)";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/06/08/15/01/wolfssee-2383842_960_720.jpg)";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687_960_720.jpg)";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg)";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/11/17/16/02/rainy-day-1831908_960_720.jpg)";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2019/12/02/16/37/snow-4668099_960_720.jpg)";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/12/14/04/08/thunderbolt-1905603__340.png)";
        
    } 
    else if(weatherType.textContent == 'Mist') {
    
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/photos/dense-mist-forest-road-and-car-on-the-roadside-with-light-beams-picture-id1147738662?k=20&m=1147738662&s=612x612&w=0&h=Grz4lX5El8_FioLzmAjolT59voFb1fBRBRXLQ7D3bDk=)";
        
    } 
    else if(weatherType.textContent == 'Smoke') {
    
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/08/07/16/43/trees-2605568_960_720.jpg)";
        
    } 
}// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
return `${date} ${month} (${day}), ${year}`;
}
