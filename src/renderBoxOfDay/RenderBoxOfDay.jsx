import React from "react";
import box from "../renderBoxOfDay/renderBoxOfDay.module.css";
import RedLine from "../redLine/RedLine";
import CreateEvent from "../event/CreateEvent";

const RenderBoxOfDay = ({ event, date, hour, onDeleteEvent, openModalWindow }) => {
    const redLine = date.toDateString() === new Date().toDateString() && hour === new Date().getHours();

    return (
        <div className={box.boxOfDay} onClick={openModalWindow}>
            {redLine && <RedLine key={date} />}

            {event && <CreateEvent event={event} onDeleteEvent={onDeleteEvent} id={event.id} />}
        </div>
    );
};

export default RenderBoxOfDay;
