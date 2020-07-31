import React from "react";
import Hours from "../hours/Hours";
import calendar from "../calendarBody/calendar.module.css";
import RenderColumnOfDay from "../renderColumnOfDay/RenderColumnOfDay";
import { filterEventsByDay } from "../common/time.utils";
import Week from "../week/Week";

const Calendar = ({ event, week, openModalWindow, onDeleteEvent }) => {
    return (
        <>
            <Week week={week} />
            <div className={calendar.calendarNet}>
                <div className={calendar.calendarTime}>
                    <Hours />
                </div>
                <div className={calendar.calendarWeek}>
                    {week.map((day) => {
                        const eventOfDay = filterEventsByDay(event, day);

                        return (
                            <RenderColumnOfDay
                                onDeleteEvent={onDeleteEvent}
                                key={day.toISOString()}
                                events={eventOfDay}
                                openModalWindow={openModalWindow}
                                date={day}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Calendar;
