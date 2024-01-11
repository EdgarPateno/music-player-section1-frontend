const durationSlider = document.getElementById("duration");
const startTrackLabel = document.getElementById("start-track");
const endTrackLabel = document.getElementById("end-track");

// Function to format time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Event listener for the input change
durationSlider.addEventListener("input", function () {
  const currentValue = this.value;
  const totalDuration = 300; // the max value of the slider corresponds to 5:00 minutes

  const startMinutes = Math.floor((currentValue / 100) * totalDuration);
  const endMinutes = totalDuration - startMinutes;

  // Update the labels
  startTrackLabel.textContent = formatTime(startMinutes);
  endTrackLabel.textContent = formatTime(endMinutes);
});
