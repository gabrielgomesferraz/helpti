<?php 
	$root = $_SERVER['DOCUMENT_ROOT'];
	$database = include($root."/build/database/database.php");
	$helptiuser = $_COOKIE["helptiuser"];
	$helptitoken = $_COOKIE["helptitoken"];	

	// echo $helptiuser;
	// echo $helptitoken;

	$sql ="SELECT rule FROM user WHERE email = '$helptiuser' AND token = '$helptitoken' ";

	$result = mysql_query($sql);


	if (mysql_num_rows($result) > 0) {
		$row = mysql_fetch_row($result);
		echo $row[0];
	} else {
		header("location:/login");
	}
?>