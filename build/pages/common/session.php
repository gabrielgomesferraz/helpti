<?php 
	$root = $_SERVER['DOCUMENT_ROOT'];
	$database = include($root."/build/database/database.php");
	$helptiuser = $_COOKIE["helptiuser"];
	$helptitoken = $_COOKIE["helptitoken"];	

	// echo $helptiuser;
	// echo $helptitoken;

	$sql ="SELECT * FROM user WHERE email = '$helptiuser' AND token = '$helptitoken' ";

	$result = mysql_query($sql);


	if (mysql_num_rows($result) > 0) {
		mysql_num_rows($result);
	} else {
		header("location:/login");
	}
?>