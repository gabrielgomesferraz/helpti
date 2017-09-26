<?php
	$database = include('../../../../database/database.php');

	$name = $_REQUEST['name'];

	echo $name;

	$sql ="INSERT INTO department (name)
	VALUES ('$name')";

	if(mysql_query($sql)) {
		echo http_response_code(200);
	} else {
		echo http_response_code();
	}
?>