import React, { Component } from "react";


export default class LastFood extends Component {
    constructor(props) {
        super(props);
        this.state = { lastCans: null };
    }

    componentDidMount() {
        fetch('/api/food/last/')
            .then(res => res.json())
            .then(data => this.setState({lastCans: data}));
    }

    render() {
        return (
            <ul className="lastfood">
                {this.state.lastCans ? (
                    this.state.lastCans.map(function(name, index){
                        return <li className="lastfood__item" key={index}>{name}</li>;
                    })
                ) : (
                    <li></li>
                )}
            </ul>
        );
    }
}
