import { createStore } from "redux";

const initialState = {
  latitude: 38.063717,
  longitude: -78.493738,
  xaxis: 0.0,
  yaxis: 0.0,
  zaxis: 0.0,
  dropped: "",
  motion: "",
  update: true
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
    case "STATUS":
      return {
        latitude: state.latitude,
        longitude: state.longitude,
        xaxis: state.xaxis,
        yaxis: state.yaxis,
        zaxis: state.zaxis,
        dropped: state.dropped,
        motion: state.motion,
        update: action.payload
      };
    default:
      return state;
  }
}

export const updateAction = data => ({
  type: "UPDATE",
  payload: data
});

export const updateStatus = data => ({
  type: "STATUS",
  payload: data
});
