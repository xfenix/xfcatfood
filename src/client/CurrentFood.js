import React, { Component } from "react";


export default class CurrentFood extends Component {
    constructor(props) {
        super(props);
        this.state = { currentCan: null };
    }

    clickOk(e) {
        alert(1)
        e.preventDefault()
    }

    clickNotOk(e) {
        alert(2)
        e.preventDefault()
    }

    componentDidMount() {
        fetch('/api/food/next/')
            .then(res => res.json())
            .then(data => this.setState({currentCan: data}));
    }

    render() {
        return <div className="current">
            <h4 className="current__pretitle">Коту нужно дать:</h4>
            <h1 className="current__title">{this.state.currentCan}</h1>
            <div className="current__buttons">
                <a href="#" onClick={this.clickOk} className="current__button current__button_ok">
                    Ест <span className="current__icon">😸</span>
                </a>
                <a href="#" onClick={this.clickNotOk} className="current__button current__button_notok">
                    Не ест <span className="current__icon">😾</span>
                </a>
            </div>
        </div>
    }
}
