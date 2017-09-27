<?php 
	
	$database = include('../../../database/database.php');

	$action = $_REQUEST['action'];
	$departmentId = $_REQUEST['departmentId'];

	if($action == "getDepartments") {

		$data = array();
		$sql ="SELECT id,name FROM department";

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {
			array_push($data, $row);
		}

		echo json_encode($data);
	} else {
		if($action == 'removeDepartment') {
			$sql ="DELETE FROM department WHERE id = '$departmentId'";

			$result = mysql_query($sql);

			echo json_encode(200);
		}
	}

?>
