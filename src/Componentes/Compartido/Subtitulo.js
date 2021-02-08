import React, { Component } from 'react';

export default class Subtitulo extends Component {
    render() {
        if (this.props.lugar) {
            var boton = <h1 className="pr-3 mb-0 mt-0 mr-2 ms-auto bd-highlight btn btn-success text-center font-weight-bold">+ Agregar {this.props.lugar}</h1>
        } else boton = <></>;
        return (
            <div className="d-flex container mb-0 pb-0 pl-4" style={{paddingTop: this.props.p}}>
                <h3 className="mb-0">{this.props.subtitulo}</h3>      
                {boton}
            </div>
        )
    }
}
