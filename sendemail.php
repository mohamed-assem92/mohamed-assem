<?php

if (!empty($_POST)) {
  $to      = 'mohamed.abdullatief92@gmail.com';
  $subject = $_POST['subject'];
  $message = wordwrap($_POST['message'], 70);
  $headers = 'From: onlineCV@github.com' . "\r\n" .
    `Reply-To: ${$_POST['email']}` . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo "done";
}


?>