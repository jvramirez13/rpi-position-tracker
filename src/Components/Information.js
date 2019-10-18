import React, { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TrackingIcon from "@material-ui/icons/TrackChanges";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Buttons from "./Buttons.js";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "typeface-roboto";
import Button from "@material-ui/core/Button";

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
  let date = new Date();
  let dateString = date.toISOString();
  let dateArray = dateString.split("T");
  date = dateArray[0];

  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = date => {
    date = date.toISOString();
    let dateArray = date.split("T");
    date = dateArray[0];
    setSelectedDate(date);
  };

  const classes = useStyles();

  const latitude = useSelector(state => state.latitude);
  const longitude = useSelector(state => state.longitude);
  const xaxis = useSelector(state => state.xaxis);
  const yaxis = useSelector(state => state.yaxis);
  const zaxis = useSelector(state => state.zaxis);
  const dropped = useSelector(state => state.dropped);
  const motion = useSelector(state => state.motion);

  function handleClick(e) {
    e.preventDefault();
    console.log(selectedDate);
  }

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div
        className={classes.paper}
        style={{ marginTop: "25px", marginBottom: "0px" }}
      >
        <Avatar className={classes.avatar} style={{ marginBottom: "20px" }}>
          <TrackingIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h4"
          style={{
            fontWeight: "700",
            fontFamily: "Roboto",
            alignContent: "center"
          }}
        >
          Raspberry Pi Position Tracker
        </Typography>
        <div
          className={classes.paper}
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Typography component="h1" variant="h5">
            <b>Latitude</b>: {latitude}°
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            <b>Longitude</b>: {longitude}°
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            <b>X-axis</b>: {xaxis} m/s²
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            <b>Y-axis</b>: {yaxis} m/s²
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            <b>Z-axis</b>: {zaxis} m/s²
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            <b>Dropped</b>: {dropped}
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: "40px" }}>
            <b>Motion Detected</b>: {motion}
          </Typography>
        </div>
        <Buttons />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Polyline Date Picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <Button
          variant="contained"
          onClick={handleClick}
          className={classes.button}
        >
          Show polyline for date selected!
        </Button>
      </div>
    </Grid>
  );
};

export default Information;
