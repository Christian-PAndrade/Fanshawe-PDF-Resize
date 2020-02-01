// Finds button
let btn = document.getElementById("resizeBtn");

// Add some styling
btn.style.backgroundColor = "cornflowerblue";
btn.style.text;

// Adds onclick which actually changes the size of the pdf
btn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.getElementsByClassName("d2l-documentViewer-show-render")[0].style.height = "1000px"`
    });
  });
};
