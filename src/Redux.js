import { createStore } from "redux";

const initialState = {
  latitude: 0.0,
  longitude: 0.0,
  xaxis: 0.0,
  yaxis: 0.0,
  zaxis: 0.0,
  dropped: "",
  motion: ""
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function evaluateBoolean(number) {
  if (number === 0) {
    return "False";
  } else {
    return "True";
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        latitude: action.payload.Latitude,
        longitude: action.payload.Longitude,
        xaxis: action.payload["X-axis"],
        yaxis: action.payload["Y-axis"],
        zaxis: action.payload["Z-axis"],
        dropped: evaluateBoolean(action.payload["Dropped"]),
        motion: evaluateBoolean(action.payload["Motion Detected"])
      };
    default:
      return state;
  }
}

export const updateAction = data => ({
  type: "UPDATE",
  payload: data
});
