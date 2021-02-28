import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import { rutaBase } from '../../RutaDB'

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

export default class TarjetaPlantaArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            titulo: "",
            desc: "",
            tempMin: "",
            tempMax: "",
            humMin: "",
            humMax: "",
            luz: [2,4],
            idhijo: "",
        };
    }
    mostrarModal(){
        var modal = document.getElementById('modal-tarjeta');
        modal.addEventListener('shown.bs.modal', (event) =>{
            var button = event.relatedTarget;
            this.setState({
                id: button.getAttribute('data-bs-id')
            });
            axios.get(rutaBase() + "/plantaareas/a/" + this.state.id)
            .then(res => {
                this.setState({
                    idhijo: res.data.idhijo,
                });
                axios.get(rutaBase() + "/plantas/" + this.state.idhijo)
                .then(res => {
                    this.setState({
                        titulo: res.data.titulo,
                        desc: res.data.desc,
                        tempMin: res.data.tempMin,
                        tempMax: res.data.tempMax,
                        humMin: res.data.humMin,
                        humMax: res.data.humMax,
                        luz: res.data.luz,
                    });
                });
            });
        })
    }
    componentDidMount(){
        this.mostrarModal();
    }
    handleRemove = (event) => {
        event.preventDefault();
        axios
          .delete(rutaBase() + "/plantaareas/" + this.state.id )
          .then((res) => {
            window.location.replace("/Area/" + this.props.idJ + "/" + this.props.idA);
          });
      };
    render() {
        const handleChange = (event, newValue) => {
            this.setState({ luz: newValue});
        };  
        return (
            <Modal tipo="tarjeta">
                <EncabezadoModal>Opciones de planta</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-remover" onSubmit={this.handleRemove}>
                    <h6 className="mb-2">Nombre</h6>
                        <input disabled className="form-control mb-3" type="text" name="titulo" value={this.state.titulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input disabled className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                        <h6 className="mb-2">Temperatura</h6>
                        <div className="row">
                            <div className="col">
                                <input disabled className="form-control mb-3" type="number" name="tempMin" placeholder="Mínima" value={this.state.tempMin}></input>
                            </div>
                            <div className="col">
                                <input disabled className="form-control mb-3" type="number" name="tempMax" placeholder="Máxima" value={this.state.tempMax}></input>
                            </div>
                        </div>
                        <h6 className="mb-2">Humedad</h6>
                        <div className="row">
                            <div className="col">
                                <input disabled className="form-control mb-3" type="number" name="humMin" placeholder="Mínima" value={this.state.humMin}></input>
                            </div>
                            <div className="col">
                                <input disabled className="form-control mb-3" type="number" name="humMax" placeholder="Máxima" value={this.state.humMax}></input>
                            </div>
                        </div>
                        <h6 className="mb-3">Luz</h6>
                        <div className="row">
                            <div className="col text-center">
                                <SliderLuz disabled value={this.state.luz} onChange={handleChange} aria-labelledby="range-slider" valueLabelDisplay="on" min={1} max={5} marks={marks} valueLabelFormat={(luz) => <div>{convertValue(luz)}</div>}/>
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
                    <button type="submit" form="form-remover" className="btn btn-danger"><i className="me-2 fas fa-ban"></i>Remover</button>
                </PieModal>
            </Modal>
        )
    }
}
