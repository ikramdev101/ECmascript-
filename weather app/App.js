document.addEventListener("DOMContentLoaded", () => {
    const model = WeatherModel();
    const view = new WeatherView();
    const controller = new WeatherController(model, view);
});
