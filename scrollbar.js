// Cache the progress bar element to avoid querying the DOM every time.
const progressBar = document.getElementById("myBar");

/**
 * Function to update the progress bar.
 */
const updateProgressBar = () => {
  // Get the current scroll position. Fallbacks are for cross-browser compatibility.
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Get the total scrollable height. Fallbacks are for cross-browser compatibility.
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  // Get the height of the visible area.
  const clientHeight = document.documentElement.clientHeight;

  // Calculate the maximum scroll position (total height - visible area).
  const maxScrollTop = scrollHeight - clientHeight;

  // Calculate the current scroll percentage.
  let scrollPercentage = (scrollTop / maxScrollTop) * 100;

  // Calculate a dynamic tolerance based on 1% of maxScrollTop.
  const tolerance = maxScrollTop * 0.01;

  // If the user has scrolled within the tolerance of the end of the page, set the progress to 100%.
  if (Math.abs(maxScrollTop - scrollTop) <= tolerance) {
    scrollPercentage = 100;
  }

  // Update the width of the progress bar.
  progressBar.style.width = scrollPercentage + "%";
};

// Attach the scroll event listener to the window.
window.addEventListener('scroll', updateProgressBar);

// Initialize the progress bar once to handle cases where the page is not at the top when loaded.
updateProgressBar();

