<?php
	$database = include('../../../database/database.php');

	$token = md5($_REQUEST['password']);
	$firstName = $_REQUEST['firstName'];
	$lastName = $_REQUEST['lastName'];
	$email = $_REQUEST['email'];
	$rule = 0;

	$sql ="SELECT * FROM user";
	$result = mysql_query($sql);


	if(mysql_num_rows($result) > 0) {
		$rule = 0;
	} else {
		$rule = 2;
	}


	$sql ="INSERT INTO user (`token`, `firstname`, `lastname`, `email`, `rule`)
	VALUES ('$token', '$firstName', '$lastName', '$email', '$rule')";

	if(mysql_query($sql)) {
		echo http_response_code(200);
	} else {
		echo http_response_code();
	}
?>