import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Tarjeta from './Tarjeta';

export default class Contenido extends Component {
    render() {
        return (
            <Container className="p-5 mt-3" style={{backgroundColor: "#E6E6E6", borderRadius: "15px"}}> 
                <Tarjeta color="danger"/>
                <Tarjeta color="success"/>
            </Container>
        )
    }
}
