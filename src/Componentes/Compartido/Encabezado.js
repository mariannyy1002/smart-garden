import React, { Component } from 'react'

export default class Encabezado extends Component {
    render() {
        return (
            <div className="card text-white mb-2 border-0">
                <div className="d-flex py-0 align-items-center btn disabled" style={{opacity:1}}>
                    <h5 className="card-text p-2 col-2 mb-0 text-muted"><i class={"fas fa-" + this.props.titulo}></i></h5>
                    <h5 className="card-text p-2 col-2 mb-0 text-muted"><i class={"fas fa-" + this.props.desc}></i></h5>
                    <h5 className="card-text p-2 col-2 mb-0 text-muted"><i class={"fas fa-" + this.props.alertas}></i></h5>
                    <h5 className="card-text p-2 col-2 mb-0 text-muted"><i class={"fas fa-" + this.props.temp}></i></h5>
                    <h5 className="card-text p-2 col-2 mb-0 text-muted"><i class={"fas fa-" + this.props.hum}></i></h5>
                    <h5 className="card-text p-2 col-2 mb-0 text-muted"><i class={"fas fa-" + this.props.luz}></i></h5>
                    {/*<h6 className="card-text p-2  ml-6">⚙️</h6>*/}
                </div>
            </div>
        )
    }
}
