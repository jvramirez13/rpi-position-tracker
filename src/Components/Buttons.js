import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { updateStatus } from "../Redux.js";

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

  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const update = data => dispatch(updateStatus(data));

  function startTracking() {
    return setStatus(true);
  }

  function stopTracking() {
    return setStatus(false);
  }

  useEffect(() => {
    update(status);
  });

  return (
    <div
      style={{
        alignContent: "center",
        justifyContent: "center",
        marginBottom: "0px"
      }}
    >
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={startTracking}
      >
        Start Tracking
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={stopTracking}
      >
        Stop Tracking
      </Button>
    </div>
  );
};

export default Buttons;
