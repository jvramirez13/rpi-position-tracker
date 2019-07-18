import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TrackingIcon from "@material-ui/icons/TrackChanges";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Buttons from "./Buttons.js";
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Information = () => {
  const classes = useStyles();

  const latitude = useSelector(state => state.latitude);
  const longitude = useSelector(state => state.longitude);
  const xaxis = useSelector(state => state.xaxis);
  const yaxis = useSelector(state => state.yaxis);
  const zaxis = useSelector(state => state.zaxis);
  const dropped = useSelector(state => state.dropped);
  const motion = useSelector(state => state.motion);

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TrackingIcon />
        </Avatar>
        <Typography component="h1" variant="h4" style={{ fontWeight: "700", fontFamily: "Roboto", alignContent: "center" }}>
          Raspberry Pi Position Tracker
        </Typography>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Latitude: {latitude}°
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            Longitude: {longitude}°
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            X-axis: {xaxis} g
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            Y-axis: {yaxis} g
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            Z-axis: {zaxis} g
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            Dropped: {dropped}
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            Motion Detected: {motion}
          </Typography>
        </div>
        <Buttons />
      </div>
    </Grid>
  );
};

export default Information;
