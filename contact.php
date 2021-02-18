<?php
$errors = '';
$mymail = 'cs5180411@iitd.ac.in';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// if (!preg_match(
// "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
// $email))
// {
//     $errors .= "\n Error: Invalid email address";
// }

if(empty($errors))
{
	$subject = "New Submission from your website : $name";
	$body = "You have recieved a new message from your profile website. ".
	" \nHere are the details:\n Name : $name \n Email: $email \n Message : \n $message";

	$headers = "From : $mymail\n";
	$headers .= "Reply-To : $email";

	mail($mymail, $subject, $body, $headers);
}
?>
