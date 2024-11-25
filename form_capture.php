<?php

$to = 'hajinoff@gmail.com';
$subject = 'Test Email';
$message = $_POST['fname']; 
mail($to, $subject, $message);  
echo "<p>Copyright &copy; 1999-" . date("Y") . " W3Schools.com</p>";

?>