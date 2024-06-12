document.getElementById('getWeatherBtn').addEventListener('click', getWeatherByCity);
document.getElementById('getLocationBtn').addEventListener('click', getWeatherByLocation);

function getWeatherByCity() {
    const city = document.getElementById('locationInput').value;
    if (city) {
        // Simulating weather data for a specific city
        const mockData = {
            name: city,
            main: {
                temp: 25,
                humidity: 70,
                pressure: 1013
            },
            weather: [{
                description: "clear sky"
            }]
        };
        displayWeatherData(mockData);
    } else {
        alert('Please enter a city name');
    }
}

function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            // Simulating weather data for current location
            const mockData = {
                name: `Lat: ${lat}, Lon: ${lon}`,
                main: {
                    temp: 30,
                    humidity: 65,
                    pressure: 1015
                },
                weather: [{
                    description: "sunny"
                }]
            };
            displayWeatherData(mockData);
        }, error => {
            console.error('Error retrieving location:', error);
            alert('Unable to retrieve your location');
        });
    } else {
        alert('Geolocation is not supported by this browser');
    }
}

function displayWeatherData(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;

    document.getElementById('cityName').innerText = `Weather in ${cityName}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('pressure').innerText = `Pressure: ${pressure} hPa`;
}
