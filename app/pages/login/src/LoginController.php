<?php 
	
	$database = include('../../../database/database.php');

	$token = md5($_REQUEST['password']);
	$email = $_REQUEST['email'];


	$sql ="SELECT * FROM user WHERE email = '$email' AND token = '$token' ";

	$result = mysql_query($sql);

	if (mysql_num_rows($result) > 0) {
		$cookie_name_user = "helptiuser";
		$cookie_value_user = "$email";
		$cookie_name_pass = "helptitoken";
		$cookie_value_pass = "$token";
		setcookie($cookie_name_user, $cookie_value_user, time() + (86400 * 30), "/"); // 86400 = 1 day
		setcookie($cookie_name_pass, $cookie_value_pass, time() + (86400 * 30), "/"); // 86400 = 1 day
		echo mysql_num_rows($result);
	} else {
		echo '0';
	}
?>
