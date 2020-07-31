import React, { Component } from "react";
import DeleteModalWindow from "../deleteModalWindow/DeleteModalWindow";
import anEvent from "../event/event.module.css";

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletePopup: false,
        };
    }

    showPopup = () => {
        const { deletePopup } = this.state;
        this.setState({ deletePopup: !deletePopup });
    };

    render() {
        const { event, id, onDeleteEvent } = this.props;
        const { deletePopup } = this.state;
        const height = (new Date(event.dateTo) - new Date(event.dateFrom)) / 1000 / 60;
        const marginTop = new Date(event.dateFrom).getMinutes();
        const styles = {
            height: `${height}px`,
            marginTop: `${marginTop}px`,
            background: `${event.colorChooser}`,
        };

        console.log(height);
        console.log(marginTop);
        console.log(styles);

        const hoursFrom = new Date(event.dateFrom).getHours();
        const minutesFrom =
            new Date(event.dateFrom).getMinutes() < 10
                ? `${new Date(event.dateFrom).getMinutes()}0`
                : new Date(event.dateFrom).getMinutes();

        const hoursTo = new Date(event.dateTo).getHours();
        const minutesTo =
            new Date(event.dateTo).getMinutes() < 10
                ? `${new Date(event.dateTo).getMinutes()}0`
                : new Date(event.dateTo).getMinutes();

        return (
            <>
                <div style={styles} className={anEvent.eventOfDay} id={id} onClick={(e) => this.showPopup(e)}>
                    {deletePopup && <DeleteModalWindow eventId={id} onDeleteEvent={onDeleteEvent} />}

                    <span className={anEvent.text}>{event.title}</span>
                    <br />
                    <span className={anEvent.text}>{`${hoursFrom}:${minutesFrom} - ${hoursTo}:${minutesTo}`}</span>
                </div>
            </>
        );
    }
}
export default CreateEvent;
