chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "goReadingList",
    type: "normal",
    title: "show wiki reading list",
    contexts: ["browser_action"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "goReadingList") {
    window.open(chrome.extension.getURL("index.html"));
  }
});
