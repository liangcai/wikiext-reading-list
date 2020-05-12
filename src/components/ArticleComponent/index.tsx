import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import MenuTabularOnLeft from "./MenuTabularOnLeft";
import TabularSegment from "./TabularSegment";
import { getLists } from "../../hooks/useLists";
import { getEntries } from "../../hooks/useEntries";
import { AxiosResponse } from "axios";

const Article: React.FC = () => {
  const [entriesLists, setEntriesLists] = useState<Array<any>>([]);
  const [activeItem, setActiveItem] = useState<string>("");
  const [entries, setEntries] = useState<Array<any>>([]);

  useEffect(() => {
    getLists().then((response: AxiosResponse) => {
      const lists = response.data.lists;
      setEntriesLists(lists);

      const defaultName =
        lists.length === 0 ? "" : lists[lists.length - 1].id.toString();
      setActiveItem(defaultName);
      console.log("effect lists: ", lists);
    });
  }, []);

  useEffect(() => {
    console.log("start useeffect, activeItem: ", activeItem);
    if (activeItem != "") {
      const data = getEntries(activeItem);
      setEntries(data);
    }

    // return () => {
    //   console.log("return useeffect");
    // };
  }, [activeItem]);

  return (
    <article>
      <Grid>
        <MenuTabularOnLeft
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          lists={entriesLists}
        />
        <TabularSegment entires={entries} />
      </Grid>
    </article>
  );
};

export default Article;
