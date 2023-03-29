window.addEventListener("load", () => {
let long;
let lat;

const timezone = document.querySelector('.location-timezone')
const showIcon = document.querySelector('.icon')
const temperature = document.querySelector('.temperature-degree')
const degreeLetter = document.querySelector('.temperature-degree span')
const tempDescription = document.querySelector('.temperature-description')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude
        lat = position.coords.latitude

        // fetch data,
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=142c9e75265ffc50a6b41d11d873a6b0`

        fetch(api)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                const {description,icon} = data.weather[0]
                showIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png">`
                timezone.innerText = `${data.sys.country}/${data.name}`
                tempDescription.innerText = `${description}`
                temperature.innerText = `${data.main.temp}`

            })
    });
  }
})