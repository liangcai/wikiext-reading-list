import { useState, useEffect } from "react";
import { API_PREFIX } from "../config";
import { AxiosResponse } from "axios";

const axios = require("axios").default;

const useLists = () => {
  const [entriesLists, setEntriesLists] = useState<Array<any>>([]);

  useEffect(() => {
    getLists().then((response: AxiosResponse) => {
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
  return axios.get(API_PREFIX + "lists/").then((response: AxiosResponse) => {
    return response;
  });
};

export { useLists };
