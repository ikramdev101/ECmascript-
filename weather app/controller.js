 { getCoordinates } from 'utils.js'; 

class WeatherController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        document.getElementById("cityInput").addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                this.getWeather();
            }
        });
    }

    async getWeather() {
        const city = document.getElementById("cityInput").value;
        if (city) {
            try {
                console.log(' coordinates for:', city);
                const { lat, lon } = await getCoordinates(city);
                console.log('Coordinates:', lat, lon);
                console.log('Fetching weather data for coordinates:', lat, lon);
                const weatherData = await this.model.fetchWeather(lat, lon);
                console.log('Weather data:', weatherData);
                this.view.displayWeather(weatherData);
            } catch (error) {
                console.error('Error:', error.message);
                this.view.displayError(error.message);
            }
        } else {
            this.view.displayError("Please enter a city name.");
        }
    }
}
