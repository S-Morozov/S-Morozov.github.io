<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];

    $to = 'semenmorozov24@gmail.com';

    $txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n Message = " . $message . "\r\n subject =" . $subject;

    $headers = "From: noreply@codeconia.com" . "\r\n" .
    "CC: somebodyelse@example.com";
    if($email !=NULL) {
        mail($to, $subject, $txt, $headers);
    }

    header('Location: thankyoumail.html');
?>
