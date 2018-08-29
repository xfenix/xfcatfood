import React, { Component } from "react";


export default class CurrentFood extends Component {
    render() {
        return <div className="current">
            <h1 className="current__title"></h1>
            <div className="current__buttons">
                <a href="#" className="current__button current__button_ok">Ест :)</a>
                <a href="#" className="current__button current__button_notok">Не ест :(</a>
            </div>
        </div>
    }
}
