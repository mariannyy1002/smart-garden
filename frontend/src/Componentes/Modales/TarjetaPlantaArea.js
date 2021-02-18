import React, { Component } from 'react'
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

export default class TarjetaPlantaArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: [2, 4]
        };
    }
    render() {
        const handleChange = (event, newValue) => {
            this.setState({ value: newValue});
        };  
        return (
            <Modal tipo="tarjeta">
                <EncabezadoModal>Opciones de planta</EncabezadoModal>
                <CuerpoModal>
                    <form>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value="" value={this.props.searchString} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value="" value={this.props.searchString} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Temperatura</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="tempMin" value="" placeholder="Mínima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="tempMax" value="" placeholder="Máxima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                        </div>
                        <h6 className="mb-2">Humedad</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="humMin" value="" placeholder="Mínima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="humMax" value="" placeholder="Máxima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                        </div>
                        <h6 className="mb-3">Luz</h6>
                        <div className="row">
                            <div className="col text-center">
                                <SliderLuz value={this.state.value} onChange={handleChange} aria-labelledby="range-slider" valueLabelDisplay="on" min={1} max={5} marks={marks} valueLabelFormat={(value) => <div>{convertValue(value)}</div>}/>
                            </div>
                        </div>
                    </form>   
                </CuerpoModal>
                <PieModal>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="me-2 fas fa-times"></i>Cancelar</button>
                    <button type="button" className="btn btn-danger"><i className="me-2 fas fa-ban"></i>Remover</button>
                </PieModal>
            </Modal>
        )
    }
}
