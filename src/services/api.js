import axios from "axios";
import store from "state/store";

const transformResponse = (data) => {
  let response = data;

  try {
    response = JSON.parse(data);
  } catch (e) {}

  if (typeof response === "object" && response.status === false) {
    throw Error(response.message);
  }

  return response;
};

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 120 * 1000,
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossorigin: "true",
  },
  transformResponse: [transformResponse],
});

Axios.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const { jwtToken } = state.account.data;

    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    if (response.data.status === false) {
      return Promise.reject(response);
    }

    return response;
  },

  async (error) => {
    if (error.message.includes("401")) {
      sessionStorage.removeItem("persist:root");
      //TODO Redirect to login page
    }

    return Promise.reject(error);
  }
);

export default Axios;
