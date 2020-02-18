// Find slider
let slider = document.getElementById("sliderInput");

// change value of slider to storage
chrome.storage.sync.get("size", data => {
  document.getElementById("sliderInput").value = data.size;
  document.getElementById("pSliderValue").innerHTML = data.size + "px";
});

// Add event listener
slider.addEventListener("input", () => {
  // Get value rounded to hundred if needed
  let sliderVal = roundToHundred(slider.value);

  // Changes text of <p> to show size
  let pTag = document.getElementById("pSliderValue");
  if (slider && pTag) pTag.innerHTML = sliderVal + " px";

  // adds to storage
  chrome.storage.sync.set({ size: sliderVal }, () => {});
});

// rounds to nearest hundred
const roundToHundred = value => {
  // will hold new number
  let fdigit, tdigit, sdigit, ldigit;

  // parse to string, get second last value
  let valueString = value.toString();
  let secondLast = parseInt(valueString[valueString.length - 2]);
  // Do stuff based on size (890 --> 900 vs 1290 --> 1300)
  if (valueString.length == 3) {
    // rounds down
    if (secondLast == 0) {
      ldigit = "0";
      sdigit = secondLast + "";
      fdigit = valueString[valueString.length - 3];
      return parseInt(fdigit + sdigit + ldigit);
    }
    // rounds up
    else if (secondLast == 9) {
      // special case for 990 --> 1000
      if (valueString[valueString.length - 3] == "9") {
        return 1000;
      } else {
        ldigit = "0";
        sdigit = "0";

        let first = parseInt(valueString[valueString.length - 3]);
        first++;
        fdigit = first + "";
        return parseInt(fdigit + sdigit + ldigit);
      }
    }
  } else {
    // rounds down
    if (secondLast == 0) {
      ldigit = "0";
      sdigit = secondLast + "";
      tdigit = valueString[valueString.length - 3];
      fdigit = valueString[valueString.length - 4];
      return parseInt(fdigit + tdigit + sdigit + ldigit);
    }
    // rounds up
    else if (secondLast == 9) {
      ldigit = "0";
      sdigit = "0";

      let third = parseInt(valueString[valueString.length - 3]);
      third++;
      tdigit = third + "";
      fdigit = "1";
      return parseInt(fdigit + tdigit + sdigit + ldigit);
    }
  }
  return value;
};
