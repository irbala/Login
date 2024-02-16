function validateForm() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      
      // Check if the username and password meet the validation criteria
      if (username !== "bu" || password !== "7san") {
        // Display an error message
        document.getElementById("error-message").textContent = "Try again";
        return false; // Prevent form submission
      }

      // Validation successful, redirect to success page
      window.location.href = "home.html";
      return false; // Prevent form submission (since we're redirecting manually)
    }
