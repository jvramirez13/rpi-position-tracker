import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Maps() {
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [xaxis, setXaxis] = useState(0.0);
  const [yaxis, setYaxis] = useState(0.0);
  const [zaxis, setZaxis] = useState(0.0);
  const [dropped, setDropped] = useState("");
  const [motion, setMotion] = useState("");

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
}
