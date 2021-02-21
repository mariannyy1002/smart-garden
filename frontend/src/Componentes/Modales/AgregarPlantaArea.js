import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import PieBotonesAgregar from '../Compartido/Modal/PieBotonesAgregar';

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

export default class AgregarPlantaArea extends Component {
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
            idpadre: this.props.idA,
            idhijo: "",
            opcion: "n",
            listaPlantas: [],
            isDisabled: false,
            modo: "n",
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
    actualizaModo = (event) => {
        this.setState({
          modo: event.target.value,
        });
        if(event.target.value == "n"){
            this.setState({
                isDisabled: false,
                titulo: "",
                desc: "",
                tempMin: "",
                tempMax: "",
                humMin: "",
                humMax: "",
                luz: [2,4],
              });
            document.getElementById("nombre").style.display= "block";
            document.getElementById("selector").style.display= "none";
        }
        else{
            this.setState({
                isDisabled: true,
              });
            document.getElementById("nombre").style.display= "none";
            document.getElementById("select-planta").selectedIndex = "0";
            document.getElementById("selector").style.display= "block";
        }
    };
    actualizaOpcion = (event) => {
        var id = event.target.value;
        this.setState({
            opcion: id,
        });
        var planta;
        if (id == "n"){
            this.setState({
                titulo: "",
                desc: "",
                tempMin: "",
                tempMax: "",
                humMin: "",
                humMax: "",
                luz: [2,4],
            });
        }
        else{
            for (var i=0 ; i < this.state.listaPlantas.length ; i++)
            {
                if (this.state.listaPlantas[i]["_id"] == id) {
                planta = this.state.listaPlantas[i];
                }
            }
            this.setState({
                titulo: planta.titulo,
                desc: planta.desc,
                tempMin: planta.tempMin,
                tempMax: planta.tempMax,
                humMin: planta.humMin,
                humMax: planta.humMax,
                luz: planta.luz,
            });
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.modo == "n"){
            const datos = {
                titulo: this.state.titulo,
                desc: this.state.desc,
                tempMin: this.state.tempMin,
                tempMax: this.state.tempMax,
                humMin: this.state.humMin,
                humMax: this.state.humMax,
                luz: this.state.luz,
            };
            var opc = "n";
            axios
              .post("http://localhost:5000/plantas", { datos })
              .then((res) => {
                opc = res.data._id;
                const datos2 = {
                    idpadre: this.state.idpadre,
                    idhijo: opc,
                };
                axios
                  .post("http://localhost:5000/plantaareas", { datos2 })
                  .then((res) => {
                    window.location.replace("/Area/" + this.props.idJ + "/" + this.props.idA);
                  });
              });
        }
        else{
            const datos2 = {
                idpadre: this.state.idpadre,
                idhijo: this.state.opcion,
            };
            axios
              .post("http://localhost:5000/plantaareas", { datos2 })
              .then((res) => {
                window.location.replace("/Area/" + this.props.idJ + "/" + this.props.idA);
              });
        }
      };
      componentDidMount(){
        axios.get("http://localhost:5000/plantas")
        .then(res => {
            this.setState({ listaPlantas: res.data });
        });
      }
    render() {
        const handleChange = (event, newValue) => {
            this.setState({ luz: newValue});
        };  
        return (
            <Modal tipo="agregar">
                <EncabezadoModal>Agregar planta</EncabezadoModal>
                <CuerpoModal>
                <form id="form-agregar" onSubmit={this.handleSubmit}>
                        <h6 className="mb-2">Agregar</h6>
                        <select className="form-select mb-3" onChange={this.actualizaModo}>
                            <option selected value="n">Nueva planta</option>
                            <option value="e">Planta existente</option>
                        </select>
                        <h6 className="mb-2">Nombre</h6>
                        <div id="nombre">
                            <input className="form-control mb-3" type="text" disabled={this.state.isDisabled} value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        </div>
                        <div id="selector" style={{display: "none"}}>
                            <select className="form-select mb-3" id="select-planta" onChange={this.actualizaOpcion}>
                                <option id="opcion-default" selected value="n">Selecciona una planta</option>
                                {this.state.listaPlantas.map(item => (
                                    <option value={item._id}>{item.titulo}</option>
                                ))}
                            </select>
                        </div>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" disabled={this.state.isDisabled} value={this.state.desc} onChange={this.actualizaDesc}></input>
                        <h6 className="mb-2">Temperatura</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" disabled={this.state.isDisabled} placeholder="Mínima" value={this.state.tempMin} onChange={this.actualizaTempMin}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" disabled={this.state.isDisabled} placeholder="Máxima" value={this.state.tempMax} onChange={this.actualizaTempMax}></input>
                            </div>
                        </div>
                        <h6 className="mb-2">Humedad</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" disabled={this.state.isDisabled} placeholder="Mínima" value={this.state.humMin} onChange={this.actualizaHumMin}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" disabled={this.state.isDisabled} placeholder="Máxima" value={this.state.humMax} onChange={this.actualizaHumMax}></input>
                            </div>
                        </div>
                        <h6 className="mb-3">Luz</h6>
                        <div className="row">
                            <div className="col text-center">
                            <SliderLuz value={this.state.luz} disabled={this.state.isDisabled} onChange={handleChange} aria-labelledby="range-slider" valueLabelDisplay="on" min={1} max={5} marks={marks} valueLabelFormat={(luz) => <div>{convertValue(luz)}</div>}/>
                                {/*<input type="range" name="luzMin" id="luzMin" min="1" max="5" value="2" title="Tenue" className="slider slider1" required value={this.props.searchString} onchange={this.handleChange}></input>*/}
                            </div>
                            {/*<div className="col">
                                <input type="range" name="luzMax" id="luzMax" min="1" max="5" value="4" title="Brillante" className="slider slider2" required value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>*/}
                        </div>
                    </form>   
                </CuerpoModal>
                <PieModal>
                    <PieBotonesAgregar/>
                </PieModal>
            </Modal>
        )
    }
}
