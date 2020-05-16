import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import MenuTabularOnLeft from "./MenuTabularOnLeft";
import TabularSegment from "./TabularSegment";
import { useLists } from "../../hooks/useLists";
import { useEntries, useActiveItem } from "../../hooks/useEntries";

const Article: React.FC = () => {
  const { entriesLists } = useLists();
  const { activeItem, setActiveItem, entries, setEntries } = useEntries();

  // 设置默认选中的目录项
  useActiveItem(entriesLists, setActiveItem);

  return (
    <article className="ui container">
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
