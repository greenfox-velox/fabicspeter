<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));
// $id=$dbhandle->real_escape_string($data->id);
// $name=$dbhandle->real_escape_string($data->name);
//
// $query="INSERT INTO coffelist VALUES($id,'".$name."')";
// $dbhandle->query($query);
$btnName=$dbhandle->real_escape_string($data->btnName);
if($btnName=='Insert'){
	$id=$dbhandle->real_escape_string($data->id);
	$name=$dbhandle->real_escape_string($data->name);

	$query="INSERT INTO coffelist VALUES('".$id."','".$name."', 0)";
	$dbhandle->query($query);
	}

	else {
		$id=$dbhandle->real_escape_string($data->id);
       $name=$dbhandle->real_escape_string($data->name);
			 $editNum=$dbhandle->real_escape_string($data->editNum);
       	$query="UPDATE coffelist SET coffename = '".$id."', position = '".$name."' WHERE coffelist.ID = $editNum";
       	$dbhandle->query($query);
	}
?>
