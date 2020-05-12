import { API_PREFIX } from "../config";
import { AxiosPromise, AxiosResponse } from "axios";

const axios = require("axios").default;

const getLists = () => {
  return axios.get(API_PREFIX + "lists/").then((response: AxiosResponse) => {
    return response;
  });
};

export { getLists };
