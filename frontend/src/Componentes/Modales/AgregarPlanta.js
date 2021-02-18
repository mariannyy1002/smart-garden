import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const marks = [
  { value: 1, label: "Obscuro" },
  { value: 2, label: "Tenue" },
  { value: 3, label: "Normal" },
  { value: 4, label: "Brillante" },
  { value: 5, label: "Muy brillante" }
];

function convertValue(num) {
  switch (num) {
    case 1: return <i className={'fas fa-moon fa-lg'}></i>;
    case 2: return <i className={'fas fa-cloud-moon fa-lg'}></i>;
    case 3: return <i className={'fas fa-cloud fa-lg'}></i>;
    case 4: return <i className={'fas fa-cloud-sun fa-lg'}></i>;
    case 5: return <i className={'fas fa-sun fa-lg'}></i>;
  }
}

const SliderLuz = withStyles({ 
    root: {color: "#24532e", width: 500, height: 3},
    valueLabel: { marginTop: "10px", '& *': { background: 'transparent', color: '#24532e'}},
    rail: { color: '#aaaaaa', opacity: 1}
})(Slider);

export default class AgregarPlanta extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            tempMin: "",
            tempMax: "",
            humMin: "",
            humMax: "",
            luz: [2,4],
        };
    }
    
    actualizaTitulo = (event) => {
        this.setState({
          titulo: event.target.value,
        });
    };
    actualizaDesc = (event) => {
        this.setState({
          desc: event.target.value,
        });
    };
    actualizaTempMin = (event) => {
        this.setState({
          tempMin: event.target.value,
        });
    };
    actualizaTempMax = (event) => {
        this.setState({
          tempMax: event.target.value,
        });
    };
    actualizaHumMin = (event) => {
        this.setState({
          humMin: event.target.value,
        });
    };
    actualizaHumMax = (event) => {
        this.setState({
          humMax: event.target.value,
        });
    };
    actualizaLuz = (event) => {
        this.setState({
          luz: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
            tempMin: this.state.tempMin,
            tempMax: this.state.tempMax,
            humMin: this.state.humMin,
            humMax: this.state.humMax,
            luz: this.state.luz,
        };
        axios
          .post("http://localhost:5000/agregarplanta", { datos })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Plantas");
          });
      };

    render() {
        const handleChange = (event, newValue) => {
            this.setState({ luz: newValue});
        };
        return (
            <Modal tipo="agregar">
                <EncabezadoModal>Agregar planta</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-agregar" onSubmit={this.handleSubmit}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                        <h6 className="mb-2">Temperatura</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="tempMin" placeholder="Mínima" value={this.state.tempMin} onChange={this.actualizaTempMin}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="tempMax" placeholder="Máxima" value={this.state.tempMax} onChange={this.actualizaTempMax}></input>
                            </div>
                        </div>
                        <h6 className="mb-2">Humedad</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="humMin" placeholder="Mínima" value={this.state.humMin} onChange={this.actualizaHumMin}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="humMax" placeholder="Máxima" value={this.state.humMax} onChange={this.actualizaHumMax}></input>
                            </div>
                        </div>
                        <h6 className="mb-3">Luz</h6>
                        <div className="row">
                            <div className="col text-center">
                                <SliderLuz value={this.state.luz} onChange={handleChange} aria-labelledby="range-slider" valueLabelDisplay="on" min={1} max={5} marks={marks} valueLabelFormat={(luz) => <div>{convertValue(luz)}</div>}/>
                                {/*<input type="range" name="luzMin" id="luzMin" min="1" max="5" value="2" title="Tenue" className="slider slider1" required value={this.props.searchString} onchange={this.handleChange}></input>*/}
                            </div>
                            {/*<div className="col">
                                <input type="range" name="luzMax" id="luzMax" min="1" max="5" value="4" title="Brillante" className="slider slider2" required value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>*/}
                        </div>
                    </form>   
                </CuerpoModal>
                <PieModal>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="me-2 fas fa-times"></i>Cancelar</button>
                    <button type="submit" form="form-agregar" className="btn btn-success"><i className="me-2 fas fa-plus"></i>Agregar</button>
                </PieModal>
            </Modal>
        )
    }
}
