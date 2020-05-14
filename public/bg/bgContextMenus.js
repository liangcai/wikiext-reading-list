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
  createMenu("sub1", "list1");
  createMenu("sub2", "list2");
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
