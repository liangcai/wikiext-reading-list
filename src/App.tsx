import React from "react";
import "semantic-ui-css/semantic.min.css";
import MenuTabularOnLeft from "./components/MenuTabularOnleft";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuTabularOnLeft lists={data.lists} />
    </div>
  );
}

const data = {
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
};

export default App;
