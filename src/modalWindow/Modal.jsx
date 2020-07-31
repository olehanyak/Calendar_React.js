import React, { Component } from "react";
import { POPUP } from "../common/storage";
import modal from "../modalWindow/modal.module.css";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            dateFrom: "",
            timeFrom: "",
            timeTo: "",
            description: "",
        };
    }

    componentDidMount() {
        const newPopup = POPUP();
        this.setState({
            ...newPopup,
        });
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        const { onSaveEvent, openModalWindow } = this.props;
        event.preventDefault();
        const newEvent = this.state;
        onSaveEvent(newEvent);
        openModalWindow();
    };

    render() {
        const { title, dateFrom, timeFrom, timeTo, description } = this.state;
        const { openModalWindow } = this.props;
        return (
            <div className={modal.modal}>
                <form className={modal.popupMenu} onSubmit={this.onSubmit}>
                    <div className={modal.popupMenuHeader}>
                        <i className={(modal.popupMenuCloseBtn, "fas fa-times")} onClick={openModalWindow} />
                        <input
                            className={modal.popupMenuTitle}
                            type="text"
                            name="title"
                            placeholder="Add event"
                            value={title}
                            onChange={this.changeHandler}
                            required
                        />
                    </div>

                    <div className={modal.popupMenuTimetable}>
                        <input
                            className={modal.popupMenuDateFrom}
                            type="date"
                            name="dateFrom"
                            value={dateFrom}
                            onChange={this.changeHandler}
                            required
                        />
                        <div className={modal.popupMenuDuration}>
                            <input
                                className={modal.popupMenuDurationFrom}
                                name="timeFrom"
                                type="time"
                                value={timeFrom}
                                onChange={this.changeHandler}
                                required
                            />
                            <div className={modal.popupMenuDurationLine}></div>
                            <input
                                className={modal.popupMenuDurationTo}
                                name="timeTo"
                                type="time"
                                value={timeTo}
                                onChange={this.changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className={modal.popupMenuDescription}>
                        <div className={modal.popupMenuDescriptionIcon}>
                            <i className="fas fa-align-left" />
                        </div>
                        <input
                            className={modal.popupMenuDescriptionText}
                            type="text"
                            name="description"
                            placeholder="Add text"
                            cols="20"
                            rows="3"
                            value={description}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className={modal.popupMenuAction}>
                        <span className={modal.popupMenuDelete} data-id="913" style={{ visibility: "hidden" }}>
                            <i className="fas fa-trash-alt" />
                        </span>
                        <button className={modal.popupMenuBtn} type="submit">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Modal;
