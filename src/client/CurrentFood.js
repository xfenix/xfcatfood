import React, { Component } from "react";


export default class CurrentFood extends Component {
    clickOk() {
        alert(1)
    }

    clickNotOk() {
        alert(2)
    }

    render() {
        return <div className="current">
            <h1 className="current__title"></h1>
            <div className="current__buttons">
                <a href="#" onclick={clickOk} className="current__button current__button_ok">Ест :)</a>
                <a href="#" onclick={clickNotOk} className="current__button current__button_notok">Не ест :(</a>
            </div>
        </div>
    }
}
