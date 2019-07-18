import React, { useEffect } from "react";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Maps from "./Maps.js";
import { useDispatch } from "react-redux";
import { updateAction } from "../Redux.js";
import Information from "./Information.js";

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

const Interface = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const update = data => dispatch(updateAction(data));

  useEffect(() => {
    let interval = setInterval(
      () =>
        axios.get(process.env.REACT_APP_API_URL).then(response => {
          update(response.data);
        }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Maps />
      <Information />
    </Grid>
  );
};

export default Interface;
