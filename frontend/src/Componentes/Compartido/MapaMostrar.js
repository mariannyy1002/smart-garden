import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapaMostrar extends Component {
    constructor(props){
        super(props);
        this.state = {
          ancho: 0,
          location: {
            lat: this.props.ubicacion[0],
            lng: this.props.ubicacion[1]
          }
        };
        window.addEventListener("resize", this.cambio);
    }
    componentDidMount(){
      this.cambio();
    }
    cambio = () =>{
      var width = document.getElementById('datos').offsetWidth;
      this.setState({
        ancho: width,
      });
    }
      render() {
        return (
          <>
            <Map
                google={this.props.google}
                style={{
                    width: "100%",
                    height: "100%",
                    }}
                containerStyle={{ width: this.state.ancho, height: "50%"}}
                initialCenter={this.state.location}
                center={this.state.location}
                zoom={14}
                onClick={(t, map, c) => this.addMarker(c.latLng, map)}>
                <Marker position={this.state.location} />
            </Map>
          </>
        );
      }
    }
    export default GoogleApiWrapper({
        apiKey: ('AIzaSyB98yqlrP44KBH-pEY-stgh3yo2ETvz0Q8')
    })(MapaMostrar);