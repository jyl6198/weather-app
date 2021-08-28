const Location = ({ weather }) => {
    return (
        <div className="location-box">
            <div className="location">
                {weather.name}, {weather.sys.country}
            </div>
        </div>
    )
}

export default Location
