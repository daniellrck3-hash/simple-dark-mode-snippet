// Get the toggle button from the HTML
const toggleButton = document.getElementById("toggle-theme");

// Check if user previously selected dark mode
// If yes, apply dark mode when page loads
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Add click event to the button
toggleButton.addEventListener("click", () => {

  // Toggle (add/remove) dark-mode class on body
  document.body.classList.toggle("dark-mode");

  // Check if dark mode is active
  if (document.body.classList.contains("dark-mode")) {

    // Save preference as dark
    localStorage.setItem("theme", "dark");

  } else {

    // Save preference as light
    localStorage.setItem("theme", "light");

  }

});