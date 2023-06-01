<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];
  header('Content-Type: application/json');
  if ($name === '') {
    echo json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
    exit();
  }
  if ($email === '') {
    echo json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
    exit();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo json_encode(array('message' => 'Email format invalid.', 'code' => 0));
      exit();
    }
  }
  if ($subject === '') {
    echo json_encode(array('message' => 'Subject cannot be empty', 'code' => 0));
    exit();
  }
  if ($message === '') {
    echo json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
    exit();
  }
  $content = "From: $name \nEmail: $email \nMessage: $message";
  $recipient = "semenmorozov24@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
  header("Location: thankyou.html");
?>








// // Check if the form is submitted
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   // Get the form fields
//   $name = $_POST['name'];
//   $email = $_POST['email'];
//   $subject = $_POST['subject'];
//   $message = $_POST['message'];
//
//   // Set the recipient email address
//   $to = 'semenmorozov24@gmail.com';
//
//   // Set the email headers
//   $headers = "From: $name <$email>\r\n";
//   $headers .= "Reply-To: $email\r\n";
//   $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
//
//   // Compose the email body
//   $email_body = "Name: $name\n";
//   $email_body .= "Email: $email\n";
//   $email_body .= "Subject: $subject\n";
//   $email_body .= "Message: $message\n";
//
//   // Send the email
//   if (mail($to, $subject, $email_body, $headers)) {
//     // Email sent successfully
//     header('Location: thankyoumail.html'); // Redirect to the thank you page
//     exit();
//   } else {
//     // Failed to send email
//     echo 'An error occurred while sending the email.';
//   }
// }
// ?>
