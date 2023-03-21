<?php

// Define a function to generate a CSRF token
function generate_csrf_token() {
  return bin2hex(random_bytes(32));
}

// Define a function to validate the CSRF token
function validate_csrf_token() {
  if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die("Invalid CSRF token");
  }
}

// Start the session
session_start();

// Generate a new CSRF token if one doesn't already exist
if (!isset($_SESSION['csrf_token'])) {
  $_SESSION['csrf_token'] = generate_csrf_token();
}

// Validate the CSRF token
validate_csrf_token();

// Validate the form data
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {

  // Sanitize the form data to prevent SQL injection and other attacks
  $name = htmlspecialchars($_POST['name']);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

  // Send the email
  $to = "jack@jackbryan.co.uk";
  $subject = "New message from $name";
  $headers = "From: $email\r\n".
             "Reply-To: $email\r\n".
             "X-Mailer: PHP/".phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "An error occurred while sending your message.";
  }

} else {
  echo "Please fill out all fields.";
}

?>
