import React, { useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import axios from "axios";

export default function Interface() {
  // const mapStyles = {
  //   width: "100%",
  //   height: "100%"
  // };

  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [xaxis, setXaxis] = useState(0.0);
  const [yaxis, setYaxis] = useState(0.0);
  const [zaxis, setZaxis] = useState(0.0);
  const [dropped, setDropped] = useState("");
  const [motion, setMotion] = useState("");

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

  function evaluateBoolean(number) {
    if (number === 0) {
      return "False";
    } else {
      return "True";
    }
  }

  useEffect(() => {
    let interval = setInterval(
      () =>
        axios.get(process.env.REACT_APP_API_URL).then(response => {
          setLatitude(response.data.Latitude);
          setLongitude(response.data.Longitude);
          setXaxis(response.data["X-axis"]);
          setYaxis(response.data["Y-axis"]);
          setZaxis(response.data["Z-axis"]);
          setDropped(evaluateBoolean(response.data["Dropped"]));
          setMotion(evaluateBoolean(response.data["Motion Detected"]));
        }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div style={{ height: "650px", width: "650px" }}>
      <h4>Latitude (°): {latitude}</h4>
      <h4>Longitude (°): {longitude}</h4>
      <h4>X-axis (g): {xaxis}</h4>
      <h4>Y-axis (g): {yaxis}</h4>
      <h4>Z-axis (g): {zaxis}</h4>
      <h4>Dropped: {dropped}</h4>
      <h4>Motion Detected: {motion}</h4>
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAPS_KEY
        }}
        center={{ lat: latitude, lng: longitude }}
        zoom={14}
      >
        <Marker title={"Current Location"} lat={latitude} lng={longitude} />
      </GoogleMap>
    </div>
  );
}
