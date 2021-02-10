import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
        return (
            <div className="container p-4">
                <div className="card text-white mb-2 border-0">
                    <div className="d-flex py-0 align-items-center btn disabled" style={{opacity:1}}>
                        <h5 className="card-text p-2 col-3 mb-0 text-muted"><i class="fas fa-exclamation-triangle"></i></h5>
                        <h5 className="card-text p-2 col-3 mb-0 text-muted"><i class="fas fa-temperature-high"></i></h5>
                        <h5 className="card-text p-2 col-3 mb-0 text-muted"><i class="fas fa-tint"></i></h5>
                        <h5 className="card-text p-2 col-3 mb-0 text-muted"><i class="fas fa-sun"></i></h5>
                        {/*<h6 className="card-text p-2  ml-6">⚙️</h6>*/}
                    </div>
                </div>
                <div className="card text-white mb-2 border-0">
                    <div className="d-flex py-3 align-items-center btn disabled" style={{backgroundColor:"#eeeeee", opacity:1}}>

                        <h5 className="card-text p-2 col-3 mb-0">{this.props.alertas}</h5>
                        <h5 className="card-text p-2 col-3 mb-0">{this.props.temp}</h5>
                        <h5 className="card-text p-2 col-3 mb-0">{this.props.hum}</h5>
                        <h5 className="card-text p-2 col-3 mb-0">{this.props.luz}</h5>
                </div>
            </div>
            </div>
        )
    }
}
