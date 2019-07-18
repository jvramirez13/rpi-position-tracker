import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div style={{alignContent: "center", justifyContent: "center", marginBottom: "0px"}}>
      <Button variant="contained" color="primary" className={classes.button}>
        Start Tracking
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Stop Tracking
      </Button>
    </div>
  );
};

export default Buttons;
