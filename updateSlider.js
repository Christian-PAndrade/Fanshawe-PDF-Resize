// Adds an event listener to the slider to update the text
// Find slider
let slider = document.getElementById("sliderInput");

// Add event listener
slider.addEventListener("change", () => {
  let pTag = document.getElementById("pSliderValue");
  if (slider && pTag) pTag.innerHTML = slider.value + " px";
});
