// Find slider
let slider = document.getElementById("sliderInput");

// change value of slider to storage
chrome.storage.sync.get("size", data => {
  document.getElementById("sliderInput").value = data.size;
  document.getElementById("pSliderValue").innerHTML = data.size + "px";
});

// Add event listener
slider.addEventListener("change", () => {
  // Changes text of <p> to show size
  let pTag = document.getElementById("pSliderValue");
  if (slider && pTag) pTag.innerHTML = slider.value + " px";

  // adds to storage
  chrome.storage.sync.set({ size: slider.value }, () => {});
});
