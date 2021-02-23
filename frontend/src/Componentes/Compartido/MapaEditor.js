import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapaEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
          fields: {
            location: {
              lat: this.props.ubicacion[0],
              lng: this.props.ubicacion[1]
            }
          },
        };
    }
      addMarker = (location, map) => {
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location
          },
          visible: true
        }));
        map.panTo(location);
        var cadena = JSON.stringify(location);
        var objeto = JSON.parse(cadena);
        var ubicacion = [objeto['lat'], objeto['lng']];
        this.props.parentCallback(ubicacion);
      };
    
      render() {
        return (
            <Map
                google={this.props.google}
                style={{
                    width: "100%",
                    height: "100%",
                    }}
                containerStyle={{ position:"absolute", width: "86.25%", height: "50%"}}
                initialCenter={this.state.fields.location}
                center={this.state.fields.location}
                zoom={14}
                onClick={(t, map, c) => this.addMarker(c.latLng, map)}>
                <Marker position={this.state.fields.location} />
            </Map>
        );
      }
    }
    export default GoogleApiWrapper({
        apiKey: ('AIzaSyB98yqlrP44KBH-pEY-stgh3yo2ETvz0Q8')
    })(MapaEditor);