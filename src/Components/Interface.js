import React, { useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TrackingIcon from "@material-ui/icons/TrackChanges";
import Maps from "./Maps.js";

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

export default function Interface() {
  // const mapStyles = {
  //   width: "100%",
  //   height: "100%"
  // };
  const classes = useStyles();

  

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

  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Maps />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <TrackingIcon />
          </Avatar>
          <Typography component="h1" variant="h4" style={{ fontWeight: "700" }}>
            Raspberry Pi Position Tracker
          </Typography>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Latitude: {latitude}°
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "40px" }}
            >
              Longitude: {longitude}°
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "40px" }}
            >
              X-axis: {xaxis} g
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "40px" }}
            >
              Y-axis: {yaxis} g
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "40px" }}
            >
              Z-axis: {zaxis} g
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "40px" }}
            >
              Dropped: {dropped}
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "40px" }}
            >
              Motion Detected: {motion}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
