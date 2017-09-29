<?php 
	
	$database = include('../../../../database/database.php');

	$action = $_REQUEST['action'];
	$name = $_REQUEST['name'];
	$departmentId = (int)$_REQUEST['departmentId'];

	if($action == "getDepartmentEdit") {

		$data = array();
		$sql ="SELECT id,name FROM department WHERE id = $departmentId" ;

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {

			array_push($data, $row);
		}

		echo json_encode($data);
	} else {

		$data = array();
		$sql ="UPDATE department SET name = '$name' WHERE id = $departmentId" ;

		$result = mysql_query($sql);

		// echo json_encode(200);
	}

?>
