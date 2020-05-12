import { API_PREFIX } from "../config";
import { AxiosPromise, AxiosResponse } from "axios";

const axios = require("axios").default;

// const getEntries = (id: string) => {
//   return axios
//     .get(API_PREFIX + `lists/${id}/entries/`)
//     .then((response: AxiosResponse) => {
//       return response;
//     });
// };

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

export { getEntries };
