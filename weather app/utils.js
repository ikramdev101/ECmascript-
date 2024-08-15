async function getCoordinates(city) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiy}`);
    if (!response.ok) {
        throw new Error('Geocoding data could not be fetched');
    }
    const data = await response.json();
    if (data.results.length > 0) {
        return {
            lat: data.results[0].geometry.lat,
            lon: data.results[0].geometry.lng
        };
    } else {
        throw new Error('City not found');
    }
}
