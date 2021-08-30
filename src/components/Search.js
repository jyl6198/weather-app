import React, { useState, useEffect } from 'react'
import Location from './Location'
import Date from './Date'
import WeatherBox from './WeatherBox'


// Search Box
const Search = () => {

    const api = {
        key: "b8595b376cd28d2229c3984d967cfe79",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const getCities = async () => {
            const citiesFromServer = await fetchCities()
            setCities(citiesFromServer);
        }
        getCities();
    }, [])

    const fetchCities = async () => {
        const res = await fetch("http://localhost:5000/cities");
        const data = res.json();
        return data;
    }
    // add searched cities to server backend
    const addSearchedCities = async (city) => {
        const res = await fetch(`http://localhost:5000/cities`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(city),
        });
        const data = await res.json();
        setCities([...cities, data]);
    }

    const searchCity = (e) => {
        if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    if (result.cod === "404") {
                        alert("City not found. Please try again!");
                    }
                    setWeather(result);
                    setQuery('');
                    addSearchedCities(result);
                });
        }
    }

    return (
        <div className={
            (typeof weather.main != "undefined") ?
                ((weather.main.temp < 15) ? "app-cold" : "app-warm")
                : "app-warm"
        }>
            <main className="search-box">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-city"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={searchCity}
                        placeholder="Search City or Zip Code" />

                    {(typeof weather.main != "undefined") ? (
                        <div>
                            <Location weather={weather} />
                            <Date />
                            <WeatherBox weather={weather} />
                        </div>
                    ) : ('')}
                </div>
            </main>
        </div >
    )
}

export default Search
