import React, { Component } from "react";
import axios from "axios";


export default class LastFood extends Component {
    constructor(props) {
        super(props);
        this.state = {lastCans: null};
    }

    componentDidMount() {
        axios('/api/food/last/')
            .then(res => res.json())
            .then(data => this.setState({lastCans: data}));
    }

    render() {
        return (
            <div className="lastfood">
                <h4 className="lastfood__title">Последние банки:</h4>
                <ul className="lastfood__list">
                    {this.state.lastCans ? (
                        this.state.lastCans.map(function(name, index){
                            return <li className="lastfood__item" key={index}>{name}</li>;
                        })
                    ) : (
                        <li className="lastfood__item"></li>
                    )}
                </ul>
            </div>
        );
    }
}
