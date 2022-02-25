// find the current URL 
let currURL;
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => { currURL = tabs[0].url; });

// Create a newe tab, and set the URL of the new tab using textise 
document.getElementById("textise-button").addEventListener("click", function () {
    currURL = currURL.replace(/^https?:\/\//, '')
    chrome.tabs.create({ url: `https://www.textise.net/showText.aspx?strURL=${currURL}` })
});