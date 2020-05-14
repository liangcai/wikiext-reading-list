import { useState, useEffect } from "react";
import { API_PREFIX, API_LOGIN } from "../config";
import { AxiosResponse, AxiosError } from "axios";
import { rejects } from "assert";
import { DH_CHECK_P_NOT_PRIME } from "constants";

const axios = require("axios").default;

const useLists = () => {
  const [entriesLists, setEntriesLists] = useState<Array<any>>([]);

  useEffect(() => {
    getLists().then((response: AxiosResponse) => {
      console.log("response status:" + response.status);
      const lists = response.data.lists;
      setEntriesLists(lists);
    });
  }, []);

  return {
    entriesLists,
    setEntriesLists,
  };
};

const getLists = () => {
  console.log("get lists");
  return axios
    .get(API_PREFIX + "lists/")
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 401) {
          alert("login wikipedia and come back to refresh this page!!!");
          window.open(API_LOGIN, "_blank");
        }
      }
      return error;
    });
};

export { useLists };
