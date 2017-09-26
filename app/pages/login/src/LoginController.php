<?php 
	
	$database = include('../../../database/database.php');

	$token = md5($_REQUEST['password']);
	$email = $_REQUEST['email'];


	$sql ="SELECT * FROM user WHERE `email` = $email AND `token` = $token";

	$result = mysql_query($sql)

	if (mysqli_num_rows($result) > 0) {
	    while($row = mysqli_fetch_assoc($result)) {
	        echo $row["firstname"];

        	$name = "helpti";
			$value = "Cookie Criado com Sucesso";
			$date = time() + 3600;
			setcookie($name, $value, $date);
	    }
	} else {
	    echo "0";
	}
?>
