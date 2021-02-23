import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapaSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: "",
            visible: false,
        };
    }
    async componentDidMount() {
        const { lat, lng } = await this.getcurrentLocation();
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location: {
              lat,
              lng
            }
          },
          currentLocation: {
            lat,
            lng
          }
        }));
      }
    
       getcurrentLocation() {
        if (navigator && navigator.geolocation) {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              resolve({
                lat: coords.latitude,
                lng: coords.longitude
              });
            });
          });
        }
        return {
          lat: 0,
          lng: 0
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
                <Marker visible={this.state.visible} position={this.state.fields.location} />
            </Map>
        );
      }
    }
    export default GoogleApiWrapper({
        apiKey: ('AIzaSyB98yqlrP44KBH-pEY-stgh3yo2ETvz0Q8')
    })(MapaSelector);