import React from "react";
import deleteEvent from "../deleteModalWindow/deleteModalWindow.module.css";

const DeleteModalWindow = ({ eventId, onDeleteEvent }) => {
    return (
        <div
            onClick={() => onDeleteEvent(eventId)}
            className={deleteEvent.eventOfDay}
            onKeyPress={() => {}}
            role="button"
            tabIndex="0"
        >
            <i className="fa fa-trash" aria-hidden="true">
                <span className={deleteEvent.textOfDay}>DELETE</span>
            </i>
        </div>
    );
};

export default DeleteModalWindow;
