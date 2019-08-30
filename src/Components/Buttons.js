import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../Redux.js";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

  const pathState = useSelector(state => state.path);

  const tracking = event => {
    setStatus(event.target.checked);
  };

  useEffect(() => {
    update(status);
  });

  function handleClick(e) {
    e.preventDefault();
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
    axios
      .post(process.env.REACT_APP_API_POST_URL, {
        Date: date,
        Time: time,
        Path: pathState
      })
      .then(function(response) {
        console.log("it worked");
      })
      .catch(function(error) {
        console.log("it didn't work");
      });
  }

  return (
    <div
      style={{
        alignContent: "center",
        justifyContent: "center",
        marginBottom: "0px"
      }}
    >
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={status}
              onChange={tracking}
              value="checkedB"
              color="primary"
            />
          }
          label="Location Tracking Switch"
          labelPlacement="start"
        />
      </FormGroup>
      <Button
        variant="outlined"
        onClick={handleClick}
        color="primary"
        className={classes.button}
      >
        Save Current Polyline
      </Button>
    </div>
  );
};

export default Buttons;
