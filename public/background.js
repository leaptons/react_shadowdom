
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("inject extension.js");
    chrome.tabs.executeScript(null, {file: "/static/js/extension.js"});
});


// console.log("inject extension.js");
// chrome.tabs.executeScript(null, {file: "/static/js/extension.js"});

const PRODUCT = {
  title: 'airpods'
};

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.message === "fetch_react_props") {
      sendResponse({product: PRODUCT});
    }
});