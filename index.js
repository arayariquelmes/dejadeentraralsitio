

chrome.runtime.onInstalled.addListener(() => {
  //Esto se ejecuta cuando se instala
  //chrome.storage.sync.set({ color });
  //console.log('Default background color set to %cgreen', `color: ${color}`);
});

let [tab]  = await chrome.tabs.query({active:true, currentWindow: true});
chrome.scripting.executeScript({
    taget:{tabId:tab.id},
    function: ejecutarAccion,
})

const ejecutarAccion = function(){
    document.querySelector("body").style.backgroundColor = "blue";
}