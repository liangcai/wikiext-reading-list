import { API_PREFIX, API_PROJECT } from "./config.js";

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
        return true;
      });
    }
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

  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === id) {
      let tabURL = tab && tab.url;
      let title = decodeURIComponent(parseTitleFromUrl(tabURL));
      console.log(`add page **${title}** to entries list ${id}: ${title}`);
      addToList(id, title);
    }
  });
};

const parseTitleFromUrl = (href) => {
  const url = new URL(href);
  return url.searchParams.has("title")
    ? url.searchParams.get("title")
    : url.pathname.replace("/wiki/", "");
};

const addToList = (listId, title) => {
  fetch(
    "https://en.wikipedia.org/w/api.php?action=query&meta=tokens&format=json",
    {
      headers: { "content-type": "application/json; charset=utf-8" },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      let token = encodeURIComponent(response.query.tokens.csrftoken);
      let postdata = {
        project: API_PROJECT,
        title: title,
      };

      fetch(`${API_PREFIX}lists/${listId}/entries/?csrf_token=${token}`, {
        body: JSON.stringify(postdata),
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .catch((err) => {
          console.error("Error:", err);
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("add entrie to list, response:", data);
        });
    });
};
