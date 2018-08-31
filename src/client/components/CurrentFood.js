import React, { Component } from "react";
import axios from "axios";


export default class CurrentFood extends Component {
    constructor(props) {
        super(props);
        this.state = {currentCan: null};
    }

    submitStatus(statusValue) {
        axios.post('/api/food/add/', {status: statusValue})
    }

    clickOk(e) {
        this.submitStatus(1)
        e.preventDefault()
    }

    clickNotOk(e) {
        this.submitStatus(0)
        e.preventDefault()
    }

    componentDidMount() {
        axios('/api/food/next/')
            .then(res => res.json())
            .then(data => this.setState({currentCan: data}));
    }

    render() {
        return <div className="current">
            <h4 className="current__pretitle">Коту нужно дать:</h4>
            <h1 className="current__title">{this.state.currentCan}</h1>
            <div className="current__buttons">
                <a href="#" onClick={this.clickOk.bind(this)} className="current__button current__button_ok">
                    Ест <span className="current__icon">😸</span>
                </a>
                <a href="#" onClick={this.clickNotOk.bind(this)} className="current__button current__button_notok">
                    Не ест <span className="current__icon">😾</span>
                </a>
            </div>
        </div>
    }
}
