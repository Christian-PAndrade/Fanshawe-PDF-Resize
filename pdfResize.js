// If a pdf element exists, make it bigger
if (document.getElementsByClassName("d2l-documentViewer-show-render")[0]) {
  chrome.storage.sync.get("size", data => {
    document.getElementsByClassName(
      "d2l-documentViewer-show-render"
    )[0].style.height = data.size + "px";
  });

  // Adds an id to scroll to it
  document
    .getElementsByClassName("d2l-documentViewer-show-render")[0]
    .setAttribute("id", "scrollToMe");

  // scroll to it
  document.getElementById("scrollToMe").scrollIntoView();
}
