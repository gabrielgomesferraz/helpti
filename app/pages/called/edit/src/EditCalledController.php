<?php 
	
	$database = include('../../../../database/database.php');

	$action = $_REQUEST['action'];
	$calledId = $_REQUEST['calledId'];

	if($action == "getCalledEdit") {

		$data = array();
		$sql ="SELECT id,title,description,department_id,status FROM called WHERE id = $calledId" ;

		$result = mysql_query($sql);

		while($row = mysql_fetch_assoc($result)) {

			array_push($data, $row);
		}

		echo json_encode($data);
	} else {

		echo $departmentId;
		$data = array();
		$sql ="UPDATE department SET name = '$name' WHERE id = $departmentId" ;

		$result = mysql_query($sql);

		// echo json_encode(200);
	}

?>
