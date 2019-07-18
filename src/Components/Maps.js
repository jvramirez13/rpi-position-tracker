import React from "react";
import GoogleMap from "google-map-react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

const Maps = () => {
  const latitude = useSelector(state => state.latitude);
  const longitude = useSelector(state => state.longitude);

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

  return (
    <Grid item xs={false} sm={4} md={7}>
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAPS_KEY
        }}
        center={{ lat: latitude, lng: longitude }}
        zoom={14}
      >
        <Marker title={"Current Location"} lat={latitude} lng={longitude} />
      </GoogleMap>
    </Grid>
  );
};

export default Maps;
