<?php
	$database = include('../../../../database/database.php');

	$titleCalled = $_REQUEST['titleCalled'];
	$department = $_REQUEST['department'];
	$description = $_REQUEST['description'];

	$helptiuser = $_COOKIE["helptiuser"];
	$helptitoken = $_COOKIE["helptitoken"];

	$sql ="SELECT id,firstname,lastname FROM user WHERE email = '$helptiuser' AND token = '$helptitoken' ";

	$result = mysql_query($sql);
	$row = mysql_fetch_row($result);

	$sql ="INSERT INTO called (`user_id`, `title`, `description`, `department_id`, `createdby`, `updatedby`)
			VALUES ('$row[0]', '$titleCalled', '$description','$department', '$row[0]', '$row[0]')";


	if(mysql_query($sql)) {
		echo http_response_code(200);
	} else {
		echo http_response_code();
	}
?>