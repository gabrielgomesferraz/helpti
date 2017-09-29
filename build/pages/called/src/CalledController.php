<?php 

	$database = include('../../../database/database.php');

	$action = $_REQUEST['action'];

	if($action == "getCalleds") {

		$data = array();
		$sql ="SELECT 
				called.id,
				called.user_id,
				called.title,
				called.department_id,
				called.description,
				called.createdby,
				called.updatedby,
				called.created,
				called.updated,
				called.status,
				user.firstName,
				user.lastName,
				department.name deparmentName
					FROM called
			INNER JOIN user ON called.user_id = user.id
			INNER JOIN department ON called.department_id = department.id";

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {
			array_push($data, $row);
		}

		echo json_encode($data);
	}

?>