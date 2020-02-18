// If a pdf element exists, make it bigger
if (document.getElementsByClassName("d2l-documentViewer-show-render")[0]) {
  console.log(document.getElementById("sliderInput").value);
  document.getElementsByClassName(
    "d2l-documentViewer-show-render"
  )[0].style.height = document.getElementById("sliderInput").value + "px";
}
