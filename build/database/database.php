<?php
	$servername = "127.0.0.1";
	$username = "root";
	$password = "admin";
	$dbname = "helpti";

	// Create connection
	$conn = mysql_connect("$servername", "$username", "$password", "$database");

	mysql_select_db("$dbname", $conn);

	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	} else {
		return json_encode(1);
	}
?>