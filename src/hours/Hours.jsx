import React from "react";
import { createNumbersArray } from "../common/time.utils";
import timeScale from "../hours/hours.module.css";

const Hours = () => {
    const hoursColumn = createNumbersArray(0, 23);

    return hoursColumn.map((hour) => {
        const time = `${hour < 10 ? "0" + hour : hour}:00`;
        return (
            <div className={timeScale.timeHours} key={hour}>
                <span className={timeScale.time}>{time}</span>
            </div>
        );
    });
};

export default Hours;
