import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 1.362495, lng: 103.826994 },
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState((previousState) => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng },
          },
        ],
      };
    });
  }

  render() {
    return (
        <div style={{ height: "70vh", width: "100%" }}>
          <Map
            google={this.props.google}
            style={{ height: "70%", width: "60%" }}
            className={"map"}
            class="map"
            initialCenter={{
              lat: 1.362495,
              lng: 103.826994,
            }}
            zoom={11.5}
            onClick={this.onClick}
          >
            {this.state.markers.map((marker, index) => (
              <Marker
                key={index}
                title={marker.title}
                name={marker.name}
                position={marker.position}
              />
            ))}
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBpEthghWHiL2WPLxGwuGZ0HXeGmFtUf34",
})(MapContainer);
