import React from "react";
import DaysOfWeek from "../daysOfWeek/DaysOfWeek";
import weekHead from "../week/week.module.css";

const Week = ({ week }) => {
    return (
        <nav className={weekHead.dateOfWeek}>
            <div className={weekHead.timeZone}>gmt+03</div>
            {week.map((day) => (
                <DaysOfWeek key={day.getDate()} day={day} />
            ))}
        </nav>
    );
};

export default Week;
