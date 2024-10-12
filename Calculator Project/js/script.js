// CalcSwith - Calculator website with dark and light modes

// Select the container for buttons
const buttons = document.querySelector(".buttons");
// Select all span elements (buttons) within the container
const btn = document.querySelectorAll("span");
// Select the element that displays the current value
const value = document.getElementById("value");
// Select the toggle button for switching modes
const togglebtn = document.querySelector(".togglebtn");
// Select the body element to apply dark mode styles
const body = document.querySelector("body");
// Select the element that controls the visibility of the mode toggle
const modetoggle = document.getElementById("mode-toggle");

// Loop through each button to add click event listeners
for (let i = 0; i < btn.length; i++) {
  // Add click event listener to each button
  btn[i].addEventListener("click", function () {
    // Get the text content of the clicked button
    let number = this.textContent;
    // Check if the button clicked is "clear"
    if (number === "clear") {
      // Clear the displayed value
      value.textContent = "";
    }
    // Check if the button clicked is "="
    else if (number === "=") {
      try {
        // Evaluate the expression and display the result
        value.textContent = eval(value.textContent);
      } catch (error) {
        // Display "Error" if the evaluation fails
        value.textContent = "Error";
      }
    }
    // For any other button, append its value to the display
    else {
      value.textContent += number;
    }
  });

  // onclick function for turning into dark mode
  togglebtn.onclick = function () {
    // Toggle the "dark-mode" class on the body element
    body.classList.toggle("dark-mode");
  };
}

// Function to display or hide the mode toggle button
function displayButton() {
  // Check if the mode toggle button is currently hidden
  if (modetoggle.style.display === "none") {
    // Show the mode toggle button
    modetoggle.style.display = "block";
  } else {
    // Hide the mode toggle button
    modetoggle.style.display = "none";
  }
}
