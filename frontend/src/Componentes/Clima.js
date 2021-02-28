import React, { Component } from 'react'
import axios from 'axios';

export default class Clima extends Component {
    constructor(props){
        super(props);
        this.state = { 
            clima: ""
        };
        this.getClima();
    }
    getClima(){
        axios.get("http://api.weatherstack.com/current?access_key=c05bea2c2ed6da20444c1f5894eca6b7&query=Cananea,Mexico")
        .then(res => {
            this.setState({ 
                clima : res.data.current.temperature
            });
        });
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <>
                Clima {this.state.clima} °C
            </>
        )
    }
}
