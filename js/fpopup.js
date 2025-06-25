// Wait for the DOM to load
window.onload = function() {
  // Get the popup element
  var popup = document.getElementById('popupBanner');
  
  // Get the close button
  var closeBtn = document.getElementById('closePopup');

  // Check if the popup has already been shown during this session
  if (!sessionStorage.getItem('popupDisplayed')) {
    // Show the popup after 2 seconds
    setTimeout(function() {
      popup.style.display = 'flex';
      // Set sessionStorage to indicate that the popup has been displayed
      sessionStorage.setItem('popupDisplayed', 'true');
    }, 1000);
  }

  // Close the popup when the close button is clicked
  closeBtn.onclick = function() {
    popup.style.display = 'none';
  }

  // Close the popup if user clicks anywhere outside of it
  window.onclick = function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  }
}
