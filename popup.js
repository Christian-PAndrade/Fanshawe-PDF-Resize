// Finds button
let btn = document.getElementById("resizeBtn");

// Add some styling
btn.style.backgroundColor = "cornflowerblue";
btn.style.height = "30px";
btn.style.width = "70px";
btn.style.color = "white";

// Adds onclick which actually changes the size of the pdf
btn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "./pdfResize.js"
    });
  });
};
