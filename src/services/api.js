import axios from "axios";
// import store from "~/state/store";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10 * 1000,
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossorigin: "true",
  },
});

Axios.interceptors.request.use(
  async (config) => {
    // const state = store.getState();
    // const { token: jwtToken } = state.account;
    //
    // if (jwtToken) {
    //   config.headers.Authorization = `Bearer ${jwtToken}`;
    // }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem("persist:root");
    }
    return Promise.reject(error);
  }
);

export default Axios;
