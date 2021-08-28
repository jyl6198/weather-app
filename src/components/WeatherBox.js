const WeatherBox = ({ weather }) => {
    return (
        <div className="weather-box">
            <div className="temperature">
                Currently: {Math.round(weather.main.temp * 1.8) + 32}°F
            </div>
            <div className="weather">
                {weather.weather[0].main}
            </div>
            <p>
                Feels like: {Math.round(weather.main.feels_like * 1.8) + 32}°F
                <br></br>
                High: {Math.round(weather.main.temp_max * 1.8) + 32}°F |
                Low: {Math.round(weather.main.temp_min * 1.8) + 32}°F
            </p>

        </div>
    )
}

export default WeatherBox
