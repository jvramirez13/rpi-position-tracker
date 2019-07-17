import React, { Component } from "react";
import GoogleMap from "google-map-react";
import axios from "axios";


// const mapStyles = {
//   width: "100%",
//   height: "100%"
// };

const markerStyle = {
  height: "50px",
  width: "50px",
  marginTop: "-50px"
};

const imgStyle = {
  height: "100%"
};

const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={title}
    />
    <h3>{title}</h3>
  </div>
);

class Interface extends Component {
  state = {
    latitude: 0.0,
    longitude: 0.0,
    xaxis: 0.0,
    yaxis: 0.0,
    zaxis: 0.0
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        axios
          .get(
            process.env.REACT_APP_API_URL
          )
          .then(response => {
            console.log(response);
            console.log(response.data.Items[0].Latitude);
            this.setState({
              latitude: parseFloat(response.data.Items[0].Latitude),
              longitude: parseFloat(response.data.Items[0].Longitude),
              xaxis: parseFloat(response.data.Items[0].Xaxis),
              yaxis: parseFloat(response.data.Items[0].Yaxis),
              zaxis: parseFloat(response.data.Items[0].Zaxis)
            });
          }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ height: "650px", width: "650px" }}>
        <h4>Latitude (g): {this.state.latitude}</h4>
        <h4>Longitude (g): {this.state.longitude}</h4>
        <h4>X-axis (g): {this.state.xaxis}</h4>
        <h4>Y-axis (g): {this.state.yaxis}</h4>
        <h4>Z-axis (g): {this.state.zaxis}</h4>
        <GoogleMap
          bootstrapURLKeys={{
            key: "AIzaSyALsG7k0wDR46eH66mVKZ6Yu9Fxh5liyLU"
          }}
          center={{ lat: this.state.latitude, lng: this.state.longitude }}
          zoom={14}
        >
          <Marker
            title={"Current Location"}
            lat={this.state.latitude}
            lng={this.state.longitude}
          />
        </GoogleMap>
      </div>
    );
  }
}

export default Interface;
