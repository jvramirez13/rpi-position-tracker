import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../Redux.js";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Buttons = () => {
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const update = data => dispatch(updateStatus(data));

  const tracking = event => {
    setStatus(event.target.checked);
  };

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
    </div>
  );
};

export default Buttons;
