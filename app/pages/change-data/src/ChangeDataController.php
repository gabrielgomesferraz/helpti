<?php 

	$database = include('../../../database/database.php');

	$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : '';
	$firstName = isset($_REQUEST['firstName']) ? $_REQUEST['firstName'] : '';
	$userId = isset($_REQUEST['userId']) ? $_REQUEST['userId'] : '';
	$lastName = isset($_REQUEST['lastName']) ? $_REQUEST['lastName'] : '';
	$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
	$rule = isset($_REQUEST['rule']) ? $_REQUEST['rule'] : '';
	$userId = isset($_REQUEST['userId']) ? $_REQUEST['userId'] : '';
	$token = isset($_REQUEST['password']) ? md5($_REQUEST['password']) : '';
	$helptiuser = isset($_COOKIE["helptiuser"]) ? $_COOKIE["helptiuser"] : '';
	$helptitoken = isset($_COOKIE["helptitoken"]) ? $_COOKIE["helptitoken"] : '';

	if($action == "getUser") {

		$data = array();
		$sql ="SELECT id,firstName,email,lastName,rule FROM user WHERE user.email = '$helptiuser' AND user.token = '$helptitoken' ";

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {
			array_push($data, $row);
		}

		echo json_encode($data);
	} else if($action == "getListUsers") {
		$data = array();
		$sql ="SELECT id,firstName,email,lastName,rule FROM user ";

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {
			array_push($data, $row);
		}

		echo json_encode($data);
	} else if($action == "getUserById") {
		$data = array();
		$sql ="SELECT id,firstName,email,lastName,rule FROM user WHERE user.id = '$userId' ";

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {
			array_push($data, $row);
		}

		echo json_encode($data);
	} else {
		$sql ="UPDATE user SET firstName = '$firstName', lastName = '$lastName', email = '$email', rule = '$rule', token = '$token' WHERE id = '$userId'" ;

		$result = mysql_query($sql);

		$cookie_name_user = "helptiuser";
		$cookie_value_user = "$email";
		$cookie_name_pass = "helptitoken";
		$cookie_value_pass = "$token";
		setcookie($cookie_name_user, $cookie_value_user, time() + (86400 * 30), "/"); // 86400 = 1 day
		setcookie($cookie_name_pass, $cookie_value_pass, time() + (86400 * 30), "/"); // 86400 = 1 day
	}

?>