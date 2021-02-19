import React, { Component } from 'react'

export default class LugarVacio extends Component {
    render() {
        return (
            <div className="container card border-0 px-4 py-3" style={{minHeight: "40vh", backgroundColor:"#eeeeee",}}>
                <h1 className="text-center text-secondary pb-3 pt-4 ">{this.props.titulo}</h1>
                <h1 className="text-center text-secondary py-3" style={{fontSize:'100px'}}><i className="me-1 far fa-folder-open"></i></h1>
                <h4 className="text-center text-secondary py-3"><i className="me-1 align-bottom fas fa-plus"></i> Agrega {this.props.contenido}</h4>
            </div>
        )
    }
}
