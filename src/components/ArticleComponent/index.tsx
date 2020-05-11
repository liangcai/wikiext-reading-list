import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import MenuTabularOnLeft from "./MenuTabularOnLeft";
import TabularSegment from "./TabularSegment";

const Article: React.FC = () => {
  // const defaultName = props.lists[props.lists.length - 1].id.toString();
  const defaultName = "2292814";
  const [activeItem, setActiveItem] = useState<string>(defaultName);

  return (
    <article>
      <Grid>
        <MenuTabularOnLeft
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          lists={getLists()}
        />
        <TabularSegment entires={getEntries(activeItem)} />
      </Grid>
    </article>
  );
};

export default Article;

const getLists = () => {
  return {
    lists: [
      {
        id: 2296453,
        name: "书",
        default: false,
        description: "",
        created: "2020-05-03T09:55:42Z",
        updated: "2020-05-06T23:34:21Z",
      },
      {
        id: 2298195,
        name: "知识",
        default: false,
        description: "",
        created: "2020-05-03T19:44:55Z",
        updated: "2020-05-03T20:01:55Z",
      },
      {
        id: 2298214,
        name: "娱乐",
        default: false,
        description: "",
        created: "2020-05-03T19:53:43Z",
        updated: "2020-05-03T20:00:53Z",
      },
      {
        id: 2296276,
        name: "神话",
        default: false,
        description: "",
        created: "2020-05-03T08:41:20Z",
        updated: "2020-05-03T18:12:17Z",
      },
      {
        id: 2292929,
        name: "互联网",
        default: false,
        description: "",
        created: "2020-05-02T07:38:50Z",
        updated: "2020-05-02T07:38:50Z",
      },
      {
        id: 2292814,
        name: "default",
        default: true,
        description: "",
        created: "2020-05-02T06:40:59Z",
        updated: "2020-05-02T06:40:59Z",
      },
    ],
    "continue-from": "2020-05-09T18:13:16Z",
  }.lists;
};

const getEntries = (id: string) => {
  console.log(`get list_${id}'s entries lists`);
  return {
    entries: [
      {
        id: 20401115,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "自然崇拜",
        created: "2020-05-07T17:00:54Z",
        updated: "2020-05-07T17:00:54Z",
      },
      {
        id: 20401114,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "祖先崇拜",
        created: "2020-05-07T17:00:54Z",
        updated: "2020-05-07T17:00:54Z",
      },
      {
        id: 20379583,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "镜子测试",
        created: "2020-05-06T23:36:49Z",
        updated: "2020-05-06T23:36:49Z",
      },
      {
        id: 20279772,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "列表索引",
        created: "2020-05-03T19:54:58Z",
        updated: "2020-05-03T19:54:58Z",
      },
      {
        id: 20279751,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "中国历史年表",
        created: "2020-05-03T19:54:25Z",
        updated: "2020-05-03T19:54:25Z",
      },
      {
        id: 20279687,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "地质年代",
        created: "2020-05-03T19:49:53Z",
        updated: "2020-05-03T19:49:53Z",
      },
      {
        id: 20279682,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "太阳系天体列表",
        created: "2020-05-03T19:49:36Z",
        updated: "2020-05-03T19:49:36Z",
      },
      {
        id: 20279618,
        listId: 2298195,
        project: "https://zh.wikipedia.org",
        title: "謬誤列表",
        created: "2020-05-03T19:45:25Z",
        updated: "2020-05-03T19:45:25Z",
      },
    ],
  }.entries;
};
