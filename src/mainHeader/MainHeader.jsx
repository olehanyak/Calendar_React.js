import React from "react";
import { getDisplayedMonth } from "../common/time.utils";
import main from "../mainHeader/main.module.css";

import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const MainHeader = ({ createEvent, onToday, next, prev, week }) => {
    const nowDate = getDisplayedMonth(week);

    return (
        <header className={main.header}>
            <button className={main.headerBtn} onClick={createEvent} type="button">
                <i className="fas fa-plus" />
                Create
            </button>

            <button key="today" className={main.headerBtn} onClick={() => onToday(nowDate)} type="button">
                Today
            </button>
            <button
                key="prev"
                className={main.arrowBtn}
                onClick={prev}
                type="button"
                onKeyPress={() => {}}
                tabIndex="0"
            >
                <i className="fas fa-chevron-left" />
            </button>
            <button key="next" className={main.arrowBtn} onClick={next} type="button" onKeyPress={() => {}}>
                <i className="fas fa-chevron-right" />
            </button>
            <span className={main.headerMonth}>{nowDate}</span>
        </header>
    );
};

export default MainHeader;
