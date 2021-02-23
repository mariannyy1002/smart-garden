import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapaMostrar extends Component {
    constructor(props){
        super(props);
        this.state = {
          location: {
            lat: this.props.ubicacion[0],
            lng: this.props.ubicacion[1]
          }
        };
    }
      render() {
        return (
            <Map
                google={this.props.google}
                style={{
                    width: "100%",
                    height: "100%",
                    }}
                containerStyle={{ position:"absolute", width: "1090px", height: "50%"}}
                initialCenter={this.state.location}
                center={this.state.location}
                zoom={14}
                onClick={(t, map, c) => this.addMarker(c.latLng, map)}>
                <Marker position={this.state.location} />
            </Map>
        );
      }
    }
    export default GoogleApiWrapper({
        apiKey: ('AIzaSyB98yqlrP44KBH-pEY-stgh3yo2ETvz0Q8')
    })(MapaMostrar);