
const Date = () => {
    const getDate = (d) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const day = days[d.getDay()];
        const month = months[d.getMonth()];
        const date = d.getDate();
        const year = d.getFullYear();

        return `${day}, ${month} ${date}, ${year}`;
    }


    return (
        <div className="date">
            {getDate(new window.Date())}
        </div>
    )
}

export default Date
