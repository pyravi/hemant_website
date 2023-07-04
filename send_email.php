<?php
if($_POST) {
		$name = $_POST["name"];
		$email = $_POST["email"];
		$phone = $_POST["phone"];
		$sender = 'do-not-reply@infonixsystem.com';
		$recipient = 'sudipta.biswas.5648@gmail.com';

		$subject = "New contact - ".$_POST["subject"];
		$message = " Hello, \n New contact information are provided below - \n\n Name: ".$name."\n Email: ".$email."\n Phone: ".$phone."\n Subject: ".$subject."\n Message: ".$_POST['message']."\n\n Thanks";
		$headers = 'From:' . $sender;

		if (mail($recipient, $subject, $message, $headers))
		{
			$response = array(
				"status" => "alert-success",
				"message" => "We have received your query. We will contact you shortly."
				);  
		}
		else
		{
			$response = array(
				"status" => "alert-danger",
				"message" => "Message coudn't be sent, try again"
			);
		}

		echo json_encode($response);
		die;
}