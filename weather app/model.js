class WeatherModel {
    constructor() {
        this.baseUrl = "https://api.open-meteo.com/v1/forecast";
    }

    async fetchWeather(lat, lon) {
        const response = await fetch(`${this.baseUrl}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timezone=auto`);
        if (!response.ok) {
            throw new Error("Weather data could not be fetched");
        }
        return await response.json();
    }
}
