import React from "react";
import week from "../daysOfWeek/daysOfWeek.module.css";
import moment from "moment";

const DaysOfWeek = ({ day }) => {
    const dayDate = new Date(day).getDate();
    const dayName = moment(new Date(day)).format("ddd");

    return (
        <div className={week.blockDay}>
            <span className={week.dayName}>{dayName}</span>

            {new Date(day).toDateString() !== new Date().toDateString() ? (
                <span className={week.dayOfWeek}>{dayDate}</span>
            ) : (
                <div className={week.currentDay}>{dayDate}</div>
            )}
        </div>
    );
};

export default DaysOfWeek;
