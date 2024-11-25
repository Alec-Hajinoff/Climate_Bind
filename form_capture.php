<?php
$to = 'hajinoff@gmail.com';
$subject = 'Test Email';
$message = $_POST['fname'];
mail($to, $subject, $message); 
