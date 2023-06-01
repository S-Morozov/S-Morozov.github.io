<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form fields
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = 'semenmorozov24@gmail.com';

  // Set the email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Compose the email body
  $email_body = "Name: $name\n";
  $email_body .= "Email: $email\n";
  $email_body .= "Subject: $subject\n";
  $email_body .= "Message: $message\n";

  // Send the email
  if (mail($to, $subject, $email_body, $headers)) {
    // Email sent successfully
    header('Location: thankyoumail.html'); // Redirect to the thank you page
    exit();
  } else {
    // Failed to send email
    echo 'An error occurred while sending the email.';
  }
}
?>
