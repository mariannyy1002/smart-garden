import React, { Component } from 'react'

export default class HistorialVacio extends Component {
    state= {
        mostrarPantalla: false
     }
    componentDidMount() {
        setTimeout(() => {
              this.setState({ mostrarPantalla: true })
        }, 100);
    }
    render() {
        if(this.state.mostrarPantalla) {
            return (
                <div className="container card border-0 px-4 py-3" style={{minHeight: "40vh", backgroundColor:"#eeeeee",}}>
                    <h1 className="text-center text-secondary pb-3 pt-4 ">No hay registros</h1>
                    <h1 className="text-center text-secondary py-3" style={{fontSize:'100px'}}><i className="me-1 far fa-calendar-times"></i></h1>
                    <h4 className="text-center text-secondary py-3">Cuando haya una nueva actualización estará aquí</h4>
                </div>
            )
       }
       else{
           return(
               <>
               </>
           )
       }
    }
}
