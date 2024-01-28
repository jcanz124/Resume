// script.js

// JavaScript function to show the popup notification
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  
    // Hide the popup after 3 seconds (adjust as needed)
    setTimeout(function () {
      popup.style.display = 'none';
    }, 3000);
  }
  
  // JavaScript function to close the popup
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // Add click event listeners for the navigation links
  var navLinks = document.querySelectorAll('.nav li a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // prevent the default link behavior
  
      // Check if the clicked link has the id "Home"
      if (link.getAttribute('href') !== '#Home') {
        showPopup();
      }
    });
  });
  