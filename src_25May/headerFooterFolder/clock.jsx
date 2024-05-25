import { useState, useEffect } from "react";
import "./headerFooterStyle.css";

function Clock() {
    const dayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const currentDayOfTheWeek = time.getDay();
    let currentHour = time.getHours();
    const currentMinute = time.getMinutes();
    const currentSecond = time.getSeconds();
    let prepand = currentHour >= 12 ? "PM" : "AM";
    currentHour = currentHour >= 12 ? currentHour - 12 : currentHour;

    if (currentHour === 0 && prepand === "PM") {
        if (currentMinute === 0 && currentSecond === 0) {
            currentHour = 12;
            prepand = " Noon";
        } else {
            currentHour = 12;
            prepand = " PM";
        }
    }

    if (currentHour === 0 && prepand === "AM") {
        if (currentMinute === 0 && currentSecond === 0) {
            currentHour = 12;
            prepand = " Midnight";
        } else {
            currentHour = 12;
            prepand = " AM";
        }
    }

    const currentDayString = dayList[currentDayOfTheWeek];

    return (
        <span>
            {`${currentDayString} ${currentHour}:${currentMinute}:${currentSecond} ${prepand}`}
        </span>
    );
}

export default Clock;
