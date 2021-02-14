import React, { Component } from 'react'

export function convertValue(num) {
    switch (num) {
      case 1: return <i title="Obscuro" class={'fas fa-moon fa-lg'} style={{color: "#212529"}}></i>;
      case 2: return <i title="Tenue" class={'fas fa-circle fa-lg'} style={{color: "#212529"}}></i>;
      case 3: return <i title="Normal" class={'fas fa-adjust fa-lg'} style={{color: "#212529"}}></i>;
      case 4: return <i title="Brillante" class={'far fa-circle fa-lg'} style={{color: "#212529"}}></i>;
      case 5: return <i title="Muy brillante" class={'far fa-sun fa-lg'} style={{color: "#212529"}}></i>;
    }
}

export default class Tarjeta extends Component {
    render() {
        return (
            <div className="card text-white mb-2">
                <div className="d-flex align-items-center px-2 py-3 btn btn-warning">
                    <h5 className="card-text p-2 col-2 mb-0">{this.props.titulo}</h5>
                    <h6 className="card-text p-2 col-2 mb-0 font-weight-light">{this.props.desc}</h6>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.alertas}</h5>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.temp}</h5>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.hum}</h5>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.luz}</h5>
                    {/*<h6 className="card-text p-2  ml-6">⚙️</h6>*/}
                </div>
            </div>
        )
    }
}
