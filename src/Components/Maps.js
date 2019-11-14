import React, { useState } from "react";
import GoogleMap from "google-map-react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const Maps = () => {
  const [map, updateMap] = useState(null);
  const [maps, updateMaps] = useState(null);
  const [mapsLoaded, updateMapsLoaded] = useState(false);

  const latitudeState = useSelector(state => state.latitude);
  const longitudeState = useSelector(state => state.longitude);
  const pathState = useSelector(state => state.path);

  const markerStyle = {
    height: "20px",
    width: "20px",
    marginLeft: "-10px",
    marginTop: "-20px"
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

  const onMapLoaded = (map, maps) => {
    updateMapsLoaded(true);
    updateMap(map);
    updateMaps(maps);
  };

  const afterMapLoadChanges = () => {
    return renderPolylines(map, maps, pathState);
  };

  const renderPolylines = (map, maps, path) => {
    /** Example of rendering geodesic polyline */
    if (maps != null) {
      let geodesicPolyline = new maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: "blue",
        strokeOpacity: 1.0,
        strokeWeight: 4
      });
      geodesicPolyline.setMap(map);

      /** Example of rendering non geodesic polyline (straight line) */
      let nonGeodesicPolyline = new maps.Polyline({
        path: path,
        geodesic: false,
        strokeColor: "blue",
        strokeOpacity: 0.7,
        strokeWeight: 3
      });
      nonGeodesicPolyline.setMap(map);
    }
  };

  return (
    <Grid item xs={false} sm={4} md={7}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
        center={{ lat: latitudeState, lng: longitudeState }}
        defaultZoom={17}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => onMapLoaded(map, maps)}
      >
        <Marker
          label={"Current Location"}
          lat={latitudeState}
          lng={longitudeState}
        />
        {mapsLoaded ? afterMapLoadChanges() : ""}
      </GoogleMap>
      {console.log(pathState)}
    </Grid>
  );
};

export default Maps;
