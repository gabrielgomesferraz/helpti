<?php 
	
	$database = include('../../../../database/database.php');

	$action = $_REQUEST['action'];
	$calledId = $_REQUEST['calledId'];
	$status = $_REQUEST['status'];
	$mensagem = $_REQUEST['mensagem'];


	if($action == "getCalledEdit") {

		$data = array();
		$sql ="SELECT 
				called.id,
				called.title,
				called.description,
				called.department_id,
				called.status,
				called.progress_called mensagem,
				user.email user_email,
				department.name department_name
			   	FROM called 
			   INNER JOIN user ON called.createdby = user.id
			   INNER JOIN department ON called.department_id = department.id
			   WHERE called.id = $calledId";

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {

			array_push($data, $row);
		}

		echo json_encode($data);
	} else {
		$sql ="UPDATE called SET status = '$status', progress_called = '$mensagem' WHERE id = $calledId" ;

		$result = mysql_query($sql);
	}

?>
