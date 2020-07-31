import React, { Component } from "react";
import MainHeader from "./mainHeader/MainHeader";
import { generateWeekRange, getStartOfWeek } from "./common/time.utils";
import Calendar from "./calendarBody/Calendar";
import Modal from "./modalWindow/Modal";
import { fetchEvents, deleteEvent, saveEvent } from ".//common/fetchEvents";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startOfWeek: getStartOfWeek(),
            event: [],
            modalWindow: false,
        };
    }

    componentDidMount() {
        this.onfetchEvents();
    }

    onfetchEvents = () => {
        return fetchEvents()
            .then((eventsList) => this.setState({ event: eventsList }))
            .catch((error) => console.log("Error", error));
    };

    onSaveEvent = (event) => {
        const newEvent = event;
        const timeFrom = newEvent.timeFrom.split(":");
        newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
        const timeTo = newEvent.timeTo.split(":");
        newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

        if (newEvent.title === "") {
            newEvent.title = "NEW EVENT";
        }

        saveEvent(newEvent)
            .then((data) => {
                const { event } = this.state;
                event.push(data);
                return this.setState({ event });
            })
            .catch((error) => console.log("Error", error));
    };

    openModalWindow = () => {
        const { modalWindow } = this.state;
        this.setState({
            modalWindow: !modalWindow,
        });
    };

    onToday = () => {
        this.setState({
            startOfWeek: getStartOfWeek(),
        });
    };

    nextMonth = () => {
        const { startOfWeek } = this.state;
        this.setState({
            startOfWeek: new Date(startOfWeek.setDate(startOfWeek.getDate() + 7)),
        });
    };

    prevMonth = () => {
        const { startOfWeek } = this.state;
        this.setState({
            startOfWeek: new Date(startOfWeek.setDate(startOfWeek.getDate() - 7)),
        });
    };

    onDeleteEvent = (id) => {
        deleteEvent(id).then(() => this.onfetchEvents());
    };

    render() {
        const { startOfWeek, modalWindow, event } = this.state;

        return (
            <div>
                <MainHeader
                    createEvent={this.openModalWindow}
                    onToday={this.onToday}
                    next={this.nextMonth}
                    prev={this.prevMonth}
                    week={generateWeekRange(startOfWeek)}
                />

                <Calendar
                    event={event}
                    onDeleteEvent={this.onDeleteEvent}
                    openModalWindow={this.openModalWindow}
                    week={generateWeekRange(startOfWeek)}
                />

                {modalWindow && (
                    <Modal
                        isShown={modalWindow}
                        onSaveEvent={this.onSaveEvent}
                        openModalWindow={this.openModalWindow}
                    />
                )}
            </div>
        );
    }
}
export default App;
