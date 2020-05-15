// import Axios from "axios";
// import { API_PREFIX, API_PROJECT } from "../../src/config";

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "goReadingList",
    type: "normal",
    title: "show wiki reading list",
    contexts: ["page_action"],
  });
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "parentItem",
    type: "normal",
    title: "save to selected list",
    contexts: ["page"],
  });
  chrome.storage.local.get(["lists"], function (result) {
    console.log("get lists data from storage");
    console.log(result);
    if ("lists" in result) {
      result.lists.map((item) => {
        createMenu(item.id.toString(), item.name);
        chrome.contextMenus.onClicked.addListener(function (info, tab) {
          if (info.menuItemId === item.id.toString()) {
            console.log(`add this page to entries list ${item.name}`);
          }
        });
        return true;
      });
    }
    // else {
    //   chrome.contextMenus.onClicked.addListener(function (info, tab) {
    //     if (info.menuItemId === "parentItem") {
    //       console.log("need login and save lists to storage");
    //       window.open(chrome.extension.getURL("index.html"));
    //     }
    //   });
    // }
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "goReadingList") {
    window.open(chrome.extension.getURL("index.html"));
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "parentItem") {
    chrome.storage.local.get(["lists"], (result) => {
      console.log("click parent and result:");
      console.log(result);
      if ("lists" in result) {
        result.lists.map((item) => {
          createMenu(item.id.toString(), item.name);
          chrome.contextMenus.onClicked.addListener(function (info, tab) {
            if (info.menuItemId === item.id.toString()) {
              console.log(`add this page to entries list ${item.name}`);
            }
          });
          return true;
        });
      } else {
        console.log("need login and save lists to storage, result:");
        console.log(result);
        window.open(chrome.extension.getURL("index.html"));
      }
    });
  }
});

const createMenu = (id, title) => {
  const options = {
    id,
    type: "normal",
    title,
    contexts: ["page"],
    parentId: "parentItem",
  };
  chrome.contextMenus.create(options);
};

// const addToList = (entrie, listId) => {
//   Axios.post(`${API_PREFIX}/lists/${listId}/entries`, {
//     project: API_PROJECT,
//     title: entrie,
//   }).then((response) => {
//     console.log(`add entrie to list, response: ${response}`);
//   });
// };
