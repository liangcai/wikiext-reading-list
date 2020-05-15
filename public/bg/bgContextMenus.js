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
    result.lists.map((item) => {
      createMenu(item.id.toString(), item.name);
      chrome.contextMenus.onClicked.addListener(function (info, tab) {
        if (info.menuItemId === item.id.toString()) {
          console.log(`add this page to entries list ${item.name}`);
        }
      });
      return true;
    });
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "goReadingList") {
    window.open(chrome.extension.getURL("index.html"));
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
