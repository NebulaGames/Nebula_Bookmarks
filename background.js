function openPage() {
    browser.tabs.create({
      url: "https://www.inspiredvoltage.com/"
    });
  }
  
  browser.browserAction.onClicked.addListener(openPage);