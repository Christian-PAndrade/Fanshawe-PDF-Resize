// If a pdf element exists, make it bigger
if (document.getElementsByClassName("d2l-documentViewer-show-render")[0]) {
  document.getElementsByClassName(
    "d2l-documentViewer-show-render"
  )[0].style.height = "1000px";

  // Adds an id to scroll to it
  document
    .getElementsByClassName("d2l-documentViewer-show-render")[0]
    .setAttribute("id", "scrollToMe");

  // scroll to it
  document.getElementById("scrollToMe").scrollIntoView();
}
