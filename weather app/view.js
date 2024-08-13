class WeatherView {
    constructor() {
        this.cityName = document.getElementById("cityName");
        this.weatherDesc = document.getElementById("weatherDesc");
        this.temperature = document.getElementById("temperature");
        this.weatherIcon = document.getElementById("weatherIcon");
        this.todayForecast = document.getElementById("todayForecast");
        this.airConditions = document.getElementById("airConditions");
        this.weeklyForecast = document.getElementById("weeklyForecast");
    }

    displayWeather(data) {
        console.log('Displaying weather data:', data); 

        // Display current weather
        this.cityName.textContent = "City Name"; 
        const currentTemp = Math.round(data.current_weather.temperature);
        this.temperature.textContent = `${currentTemp}°C`;

        // Display weather description (based on weather code)
        const weatherCode = data.current_weather.weathercode;
        this.weatherDesc.textContent = `Weather Code: ${weatherCode}`;
        this.weatherIcon.src = `path/to/weather-icons/${weatherCode}.png`;

        // Display today's forecast (simplified example)
        this.todayForecast.innerHTML = `
            <div>6:00 AM - ${data.hourly.temperature_2m[0]}°C</div>
            <div>9:00 AM - ${data.hourly.temperature_2m[1]}°C</div>
            <!-- Add more hourly data as needed -->
        `;

        this.airConditions.innerHTML = `
            <div>Wind Speed: ${data.current_weather.windspeed} km/h</div>
            <div>Precipitation: ${data.daily.precipitation_sum[0]} mm</div>
        `;

        // Display weekly forecast
        this.weeklyForecast.innerHTML = `
            <div>Monday: ${data.daily.temperature_2m_max[0]}°C / ${data.daily.temperature_2m_min[0]}°C</div>
            <div>Tuesday: ${data.daily.temperature_2m_max[1]}°C / ${data.daily.temperature_2m_min[1]}°C</div>
            <!-- Repeat for other days -->
        `;
    }

    displayError(error) {
        this.cityName.textContent = error;
        this.weatherDesc.textContent = '';
        this.temperature.textContent = '';
        this.weatherIcon.src = '';
        this.todayForecast.innerHTML = '';
        this.airConditions.innerHTML = '';
        this.weeklyForecast.innerHTML = '';
    }
}
