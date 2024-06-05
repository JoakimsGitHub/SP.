import { useState, useEffect } from "react";
import "./hfsStyle.css";

// Separate logic for the clock color, setting the class value depending on the hour. 
function getHourClass(hour) {
    return hour >= 6 && hour < 18 ? "clockDay" : "clockNight";
}

function getTimeOfDay(currentHour, currentMinute, currentSecond) {
    let prepand = currentHour >= 12 ? "PM" : "AM";
    if (currentHour === 0) {
        if (currentMinute === 0 && currentSecond === 0) {
            currentHour = 12;
            prepand = "Midnight";
        } else {
            currentHour = 12;
            prepand = "AM";
        }
    } else if (currentHour === 12) {
        if (currentMinute === 0 && currentSecond === 0) {
            prepand = "Noon";
        } else {
            prepand = "PM";
        }
    } else {
        currentHour = currentHour >= 12 ? currentHour - 12 : currentHour;
    }
    return { currentHour, prepand };
}

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
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const currentDayOfTheWeek = time.getDay();
    let currentHour = time.getHours();
    const currentMinute = time.getMinutes();
    const currentSecond = time.getSeconds();

    // Calling the function with these arguments, destructuring its returned object and storing its keys as new variables. 
    const { currentHour: adjustedHour, prepand } = getTimeOfDay(
        currentHour,
        currentMinute,
        currentSecond,
    );

    const clockClass = getHourClass(currentHour);

    const currentDayString = dayList[currentDayOfTheWeek];

    return (
        <span>
            <div className={clockClass}>
                {`${currentDayString} ${adjustedHour}:${currentMinute
                    .toString()
                    .padStart(
                        2,
                        "0",
                    )}:${currentSecond.toString().padStart(2, "0")} ${prepand}`}
            </div>
        </span>
    );
}

export default Clock;
