import React, { useEffect, useState } from "react";
import "./ComingSoon.scss";

function ComingSoon() {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // a and b are javascript Date objects
    const dateDiffInDays = (a: Date, b: Date) => {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    };
    const [days, setDays] = useState(dateDiffInDays(new Date(), new Date("2022-12-31")));
    const [hours, setHours] = useState(new Date().getHours() - new Date("2022-12-31").getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes() - new Date("2022-12-31").getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds() - new Date("2022-12-31").getSeconds());
    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            clearInterval(myInterval);
                        } else {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    } else {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });
    return (
        <div className="page">
            <div className="time middle">
                <span><div id="days">{days}</div> Days</span>
                <span><div id="hours">{hours}</div> Hours</span>
                <span><div id="minutes">{minutes}</div> Minutes</span>
                <span><div id="seconds">{seconds}</div> Seconds</span>
            </div>
        </div>
    );
}

export default ComingSoon;