import React, { Component } from "react";
import LastFood from "./LastFood";
import CurrentFood from "./CurrentFood";
import "../resources/app.scss";


export default class App extends Component {
    render() {
        return <div className="app">
            <CurrentFood />
            <LastFood />
        </div>
    }
}
