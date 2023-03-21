document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var messageInput = document.getElementById("message");

  // Sanitize the inputs on the client side
  nameInput.value = DOMPurify.sanitize(nameInput.value);
  emailInput.value = DOMPurify.sanitize(emailInput.value);
  phoneInput.value = DOMPurify.sanitize(phoneInput.value);
  messageInput.value = DOMPurify.sanitize(messageInput.value);

  var formData = new FormData();
  formData.append("name", nameInput.value);
  formData.append("email", emailInput.value);
  formData.append("phone", phoneInput.value);
  formData.append("message", messageInput.value);


  var xhr = new XMLHttpRequest();
  xhr.open("POST", "PHP/submit.php");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Hide the form and show the confirmation message
      document.getElementById("contact-form").style.display = "none";
      document.getElementById("confirmation-message").style.display = "block";
    }
  };
  xhr.send(formData);
});