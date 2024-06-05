import { useState, useEffect } from "react";
import "./headerFooterStyle.css";

const websiteName = " Our website";

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
    // Using hooks for managing the functional component.
    // useState takes in the initial state (only for the first render) and returns the current state value (the target) and a function that updates it.
    // The state doesn't have to be an object.

    const [time, setTime] = useState(new Date());
    // useEffect allows for performing operation to the DOM from the functional component (side effects.
    // The inputs will come into effect, updating the document using the browser API.
    useEffect(updateClock);

    function updateClock() {
        setInterval(() => setTime(new Date()), 1000);
    }

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
        currentDayString +
        " " +
        currentHour +
        ":" +
        currentMinute +
        ":" +
        currentSecond +
        " " +
        prepand
    );
}
// Exporting in the name declaration, rather than using a dedicated export statement.
export default function Footer() {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()} {websiteName}
            </p>
            <time> {<Clock />} </time>
        </footer>
    );
}
