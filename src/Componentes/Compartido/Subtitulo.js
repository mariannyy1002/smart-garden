import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class Subtitulo extends Component {
    render() {
        return (
            <div className="container mb-0 pb-0 pl-4" style={{paddingTop: this.props.p}}>
                <h3 className="mb-0">{this.props.subtitulo}</h3>          
            </div>
        )
    }
}
