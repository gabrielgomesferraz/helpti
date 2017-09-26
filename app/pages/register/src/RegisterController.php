<?php
	$database = include('../../../database/database.php');

	$token = md5($_REQUEST['password']);
	$firstName = $_REQUEST['firstName'];
	$lastName = $_REQUEST['lastName'];
	$email = $_REQUEST['email'];
	$rule = 0;


	$sql ="INSERT INTO user (`token`, `firstname`, `lastname`, `email`, `rule`)
	VALUES ('$token', '$firstName', '$lastName', '$email', '$rule')";

	if(mysql_query($sql)) {
		echo http_response_code(200);
	} else {
		echo http_response_code();
	}
?>