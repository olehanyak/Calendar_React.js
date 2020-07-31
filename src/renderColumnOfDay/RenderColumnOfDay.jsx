import React from "react";
import column from "./renderColumnOfDay.module.css";
import RenderBoxOfDay from "../renderBoxOfDay/RenderBoxOfDay";
import { filterEventsByHour } from "../common/time.utils";
import { generateNumbers } from "../common/time.utils";

const RenderColumnOfDay = ({ events, openModalWindow, date, onDeleteEvent }) => {
    const timeScale = generateNumbers(0, 23);

    return (
        <div className={column.day}>
            {timeScale.map((index) => {
                const event = filterEventsByHour(events, index);

                return (
                    <RenderBoxOfDay
                        onDeleteEvent={onDeleteEvent}
                        event={event}
                        hour={index}
                        date={date}
                        key={index}
                        openModalWindow={openModalWindow}
                    />
                );
            })}
        </div>
    );
};

export default RenderColumnOfDay;
