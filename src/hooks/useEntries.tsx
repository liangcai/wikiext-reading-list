import { useEffect, useState, SetStateAction } from "react";
import { API_PREFIX } from "../config";
import { AxiosResponse } from "axios";
import { menuType } from "../type";

const axios = require("axios").default;

const useEntries = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [entries, setEntries] = useState<Array<any>>([]);
  useEffect(() => {
    console.log("start useeffect, activeItem: ", activeItem);
    if (activeItem != "") {
      getEntries(activeItem).then((response: AxiosResponse) => {
        const data = response.data.entries;
        setEntries(data);
      });
    }
  }, [activeItem]);

  return {
    activeItem,
    setActiveItem,
    entries,
    setEntries,
  };
};

const useActiveItem = (
  entriesLists: Array<menuType>,
  setActiveItem: SetStateAction<any>
) => {
  useEffect(() => {
    const defaultName =
      entriesLists.length === 0
        ? ""
        : entriesLists[entriesLists.length - 1].id.toString();
    setActiveItem(defaultName);
    console.log("effect lists: ", entriesLists);
  }, [entriesLists]);
};

const getEntries = (id: string) => {
  return axios
    .get(API_PREFIX + `lists/${id}/entries/`)
    .then((response: AxiosResponse) => {
      return response;
    });
};

export { useEntries, useActiveItem };
