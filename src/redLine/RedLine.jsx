import React, { Component } from "react";
import redLine from "../redLine/redLine.module.css";

class RedLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().getMinutes() - 4,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            const marginTop = new Date().getMinutes() - 4;

            this.setState({
                currentTime: marginTop,
            });
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { currentTime } = this.state;
        return (
            <div className={redLine.redLineArea} style={{ marginTop: `${currentTime}px` }}>
                <div className={redLine.point} />
                <div className={redLine.line} />
            </div>
        );
    }
}

export default RedLine;
