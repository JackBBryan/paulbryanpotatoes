// This function checks if the entered postcode is valid and displays a message accordingly
function checkPostcode(postcodeInput) {
    // Fetch the list of postcodes from a JSON file
    fetch('../JSON/postcode-list.json')
      .then(response => response.json())
      .then(data => {
        // Remove whitespace and convert the input postcode to uppercase
        postcodeInput = postcodeInput.replace(/\s/g, '').toUpperCase();
        postcodeInput = DOMPurify.sanitize(postcodeInput); // Sanitize the input using DOMPurify
        // Extract the first part of the postcode (e.g. "RH16")
        const postcodePrefix = postcodeInput.slice(0, postcodeInput.length == 7 ? 4 : 3);
        // Convert all postcodes in the list to uppercase
        const postcodes = data.postcodes.map(postcode => postcode.toUpperCase());
        // Find all postcodes that start with the same characters as the input
        const matches = postcodes.filter(postcode => postcode.startsWith(postcodePrefix));
        // Display the appropriate message based on whether there are matches or not
        if (matches.length > 0) {
          document.getElementById('result').textContent = `We deliver to your area!`;
        } else {
          document.getElementById('result').innerHTML = `Sorry we currently do not deliver to that area, you can make a request using the <a href="#contact-section">Contact Us</a> form below.`;
        }
      })
      .catch(error => console.error(error));
  }
  
  // Add a click event listener to the check button
  const checkButton = document.getElementById('check-button');
  checkButton.addEventListener('click', function() {
    // Get the value of the postcode input field and remove whitespace
    const postcodeInput = document.getElementById('postcode').value;
    const formattedPostcode = postcodeInput.replace(/ {0,8}/g, '');
    // Check if the postcode is valid and display a message if it is
    if (formattedPostcode.length >= 3 && formattedPostcode.length <= 7) {
      checkPostcode(formattedPostcode);
    } else {
      // Clear the result message if the postcode is not valid
      document.getElementById('result').textContent = '';
    }
  });