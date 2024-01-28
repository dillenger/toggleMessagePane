function handleClick() {
  browser.toggleMessagePaneApi.toggleMessagePane();
}

browser.browserAction.onClicked.addListener(handleClick);
