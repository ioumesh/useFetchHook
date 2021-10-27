import { useReducer, useEffect } from "react";
import axios from "axios";
const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch_data",
  ERROR: "error ",
};
const initialState = {
  data: [],
  loading: true,
  error: null,
};
const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
    default:
     return state;
  }
};
const UseFetch = ( BASE_URL) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(BASE_URL)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.ERROR, payload: err.error });
      });
  }, [BASE_URL]);
  return state;
};

export default UseFetch;
